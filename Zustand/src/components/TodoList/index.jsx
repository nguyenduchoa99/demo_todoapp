import { TodoItems } from '@components';
import { useEffect, useState } from 'react';

import todoStore from 'src/store/todoStore';

import './styles.css';

const TodoList = () => {
	const { todoList, filter, getLength } = todoStore();

	const [todoRender, setTodoRender] = useState([]);

	useEffect(() => {
		setTodoRender(
			todoList.filter(todo => {
				switch (filter) {
					case 'active':
						return !todo.completed;
					case 'completed':
						return todo.completed;
					default:
						return true;
				}
			})
		);
	}, [filter, todoList]);

	useEffect(() => {
		getLength(todoRender.length);
	}, [getLength, todoRender.length]);

	return (
		<div className="todo-list-container">
			{todoRender.map(todo => (
				<TodoItems key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
