import clsx from 'clsx';
import todoStore from 'src/store/todoStore';
import './styles.css';

const TodoFilter = () => {
	const { handleFilter, filter, lengthTodo } = todoStore();

	return (
		<div className="todo-filter-container">
			<div className="todo-filter-count">{lengthTodo} Item left</div>
			<div className="todo-filter-status">
				<span onClick={() => handleFilter('all')} className={clsx({ active: filter === 'all' })}>
					All
				</span>
				<span onClick={() => handleFilter('active')} className={clsx({ active: filter === 'active' })}>
					Active
				</span>
				<span onClick={() => handleFilter('completed')} className={clsx({ active: filter === 'completed' })}>
					Completed
				</span>
			</div>
		</div>
	);
};

export default TodoFilter;
