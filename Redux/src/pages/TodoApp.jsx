import { TodoFilter, TodoForm, TodoList } from '@components';

import './styles.css'

const TodoApp = () => (
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

export default TodoApp;
