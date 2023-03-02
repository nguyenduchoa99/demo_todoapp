import { submitTodo } from '@components/slice/todo.slice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

const TodoForm = () => {
	const [value, setValue] = useState('');
	const { editTodo } = useSelector(state => state.todos);
	const dispatch = useDispatch();
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

	const handleChange = event => {
		setValue(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
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

export default TodoForm;
