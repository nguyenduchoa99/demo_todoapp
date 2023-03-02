import clsx from 'clsx';
import { connect } from 'react-redux';
import { filterTodo } from 'src/store/actions/todo.actions';

import './styles.css';

const TodoFilter = ({ dispatch, filter, length }) => (
	<div className="todo-filter-container">
		<div className="todo-filter-count">{length} Item left</div>
		<div className="todo-filter-status">
			<span onClick={() => dispatch(filterTodo('all'))} className={clsx({ active: filter === 'all' })}>
				All
			</span>
			<span onClick={() => dispatch(filterTodo('active'))} className={clsx({ active: filter === 'active' })}>
				Active
			</span>
			<span onClick={() => dispatch(filterTodo('completed'))} className={clsx({ active: filter === 'completed' })}>
				Completed
			</span>
		</div>
	</div>
);

const mapStateToProps = state => ({
	filter: state.todoApp.filter,
	length: state.todoApp.length
});
export default connect(mapStateToProps)(TodoFilter);
