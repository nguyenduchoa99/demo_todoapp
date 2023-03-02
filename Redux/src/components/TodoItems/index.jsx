import { connect } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from 'src/store/actions/todo.actions';
import iconActive from '../../assets/imgs/active-tick.svg';
import iconCompleted from '../../assets/imgs/complete-tick.svg';
import iconDelete from '../../assets/imgs/delete.svg';
import iconEdit from '../../assets/imgs/edit.svg';

import './styles.css';

const TodoItems = ({ todo, toggleTodo, deleteTodo, editTodo }) =>
	todo.completed ? (
		<div className="todo-item-container">
			<span className="todo-item-toggle">
				<img onClick={() => toggleTodo(todo.id)} className="icon-active-completed" src={iconCompleted} alt="" />
			</span>
			<div className="todo-item-content completed">{todo.title}</div>
			<div className="todo-item-options">
				<span className="icon-btn">
					<img onClick={() => deleteTodo(todo.id)} className="icon-delete" src={iconDelete} alt="" />
				</span>
			</div>
		</div>
	) : (
		<div className="todo-item-container">
			<span className="todo-item-toggle">
				<img onClick={() => toggleTodo(todo.id)} className="icon-active-completed" src={iconActive} alt="" />
			</span>
			<div className="todo-item-content">{todo.title}</div>
			<div className="todo-item-options">
				<span className="icon-btn">
					<img onClick={() => editTodo(todo)} className="icon-edit" src={iconEdit} alt="" />
				</span>
				<span className="icon-btn">
					<img onClick={() => deleteTodo(todo.id)} className="icon-delete" src={iconDelete} alt="" />
				</span>
			</div>
		</div>
	);

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	deleteTodo: id => dispatch(deleteTodo(id)),
	editTodo: todo => dispatch(editTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoItems);
