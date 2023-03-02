import iconActive from '../../assets/imgs/active-tick.svg';
import iconCompleted from '../../assets/imgs/complete-tick.svg';
import iconDelete from '../../assets/imgs/delete.svg';
import iconEdit from '../../assets/imgs/edit.svg';

import todoStore from 'src/store/todoStore';

import './styles.css';

const TodoItems = ({ todo }) => {
	const { handleToggle, handleDelete, handleEdit } = todoStore();

	return todo.completed ? (
		<div className="todo-item-container">
			<span className="todo-item-toggle">
				<img onClick={() => handleToggle(todo)} className="icon-active-completed" src={iconCompleted} alt="" />
			</span>
			<div className="todo-item-content completed">{todo.title}</div>
			<div className="todo-item-options">
				<span className="icon-btn">
					<img onClick={() => handleDelete(todo)} className="icon-delete" src={iconDelete} alt="" />
				</span>
			</div>
		</div>
	) : (
		<div className="todo-item-container">
			<span className="todo-item-toggle">
				<img onClick={() => handleToggle(todo)} className="icon-active-completed" src={iconActive} alt="" />
			</span>
			<div className="todo-item-content">{todo.title}</div>
			<div className="todo-item-options">
				<span className="icon-btn">
					<img onClick={() => handleEdit(todo)} className="icon-edit" src={iconEdit} alt="" />
				</span>
				<span className="icon-btn">
					<img onClick={() => handleDelete(todo)} className="icon-delete" src={iconDelete} alt="" />
				</span>
			</div>
		</div>
	);
};

export default TodoItems;
