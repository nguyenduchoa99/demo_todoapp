import { useEffect, useRef, useState } from 'react';
import todoStore from 'src/store/todoStore';

import './styles.css';

const TodoForm = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef();

	const { handleSubmit, editTodo } = todoStore();

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

	const submit = e => {
		e.preventDefault();
		if (value === '') {
			return alert('Vui lòng nhập task');
		}
		handleSubmit(value);
		setValue('');
	};

	return (
		<div className="todo-form-container">
			<form onSubmit={submit}>
				<input value={value} onChange={handleChange} ref={inputRef} type="text" placeholder="What need to be done?" />
			</form>
		</div>
	);
};

export default TodoForm;
