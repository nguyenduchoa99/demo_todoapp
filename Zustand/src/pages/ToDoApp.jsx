import { TodoFilter, TodoForm, TodoList } from '@components/index';
import { useEffect } from 'react';
import todoStore from 'src/store/todoStore';

import './styles.css';

const ToDoApp = () => {
	const { getData } = todoStore();

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div>
			<div className="header">
				<h1 className="header__title">My Todos</h1>
			</div>
			<div className="todo-container-wrapper">
				<div className="todo-container">
					<TodoForm />
					<TodoFilter />
					<TodoList />
				</div>
			</div>
		</div>
	);
};

export default ToDoApp;
