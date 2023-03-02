import { filterTodo } from '@components/slice/todo.slice';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

const TodoFilter = () => {
	const dispatch = useDispatch();

	const { lengthTodo } = useSelector(state => state.todos);

	const handleFilter = filter => {
		dispatch(filterTodo(filter));
	};

	return (
		<div className="todo-filter-container">
			<div className="todo-filter-count"> {lengthTodo} Item left</div>
			<div className="todo-filter-status">
				<span onClick={() => handleFilter('all')}>All</span>
				<span onClick={() => handleFilter('active')}>Active</span>
				<span onClick={() => handleFilter('completed')}>Completed</span>
			</div>
		</div>
	);
};

export default TodoFilter;
