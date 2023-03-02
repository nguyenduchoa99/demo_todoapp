import { TodoItems } from '@components';
import { getTodo, lengthTodo } from '@components/slice/todo.slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css'

const TodoList = () => {
	const dispatch = useDispatch();

	const { todoList, filter } = useSelector(state => state.todos);
	const [todoRender, setTodoRender] = useState([]);

	useEffect(() => {
		dispatch(getTodo());
	}, [dispatch]);

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

export default TodoList;
