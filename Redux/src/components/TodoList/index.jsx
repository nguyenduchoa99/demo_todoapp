import { TodoItems } from '@components';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { lengthTodo } from 'src/store/actions/todo.actions';

import './styles.css';

const TodoList = ({ todoList, filter, dispatch }) => {
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
		dispatch(lengthTodo(todoRender.length));
	});

	return (
		<div className="todo-list-container">
			{todoRender.map(todo => (
				<TodoItems key={todo.id} todo={todo} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	todoList: state.todoApp.todoList,
	filter: state.todoApp.filter
});

export default connect(mapStateToProps)(TodoList);
