import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { submitTodo } from 'src/store/actions/todo.actions';

import './styles.css';

const TodoForm = ({ dispatch, editTodo }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	});

	useEffect(() => {
		if (editTodo) {
			inputRef.current.focus();
			setValue(editTodo.title);
		}
	}, [editTodo]);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (value === '') {
			return alert('Vui lòng nhập task');
		}
		dispatch(submitTodo(value));
		setValue('');
	};

	return (
		<div className="todo-form-container">
			<form onSubmit={handleSubmit}>
				<input value={value} onChange={handleChange} ref={inputRef} type="text" placeholder="What need to be done?" />
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	editTodo: state.todoApp.editTodo
});

export default connect(mapStateToProps)(TodoForm);
