import { DELETE_TODO, EDIT_TODO, FILTER_TODO, LENGTH_TODO, SUBMIT_TODO, TOGGLE_TODO } from '../types/todo.types';

const stateDefault = {
	todoList: [
		{
			id: 1,
			title: 'Study',
			completed: false
		},
		{
			id: 2,
			title: 'Work',
			completed: true
		}
	],
	editTodo: null,
	filter: 'all',
	length: 0
};

export const todoApp = (state = stateDefault, { type, payload }) => {
	switch (type) {
		case TOGGLE_TODO: {
			const data = state.todoList.map(todo => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo));
			return { ...state, todoList: data };
		}
		case DELETE_TODO: {
			const data = state.todoList.filter(todo => todo.id !== payload);
			return { ...state, todoList: data };
		}
		case SUBMIT_TODO: {
			if (state.editTodo) {
				const data = state.todoList.map(todo => (todo.id === state.editTodo.id ? { ...todo, title: payload } : todo));
				return { ...state, todoList: data, editTodo: null };
			} else {
				const data = [...state.todoList];
				data.push({ id: Date.now(), title: payload, completed: false });
				return { ...state, todoList: data };
			}
		}
		case EDIT_TODO: {
			const data = { ...payload };
			return { ...state, editTodo: data };
		}
		case FILTER_TODO: {
			const data = payload;
			return { ...state, filter: data };
		}
		case LENGTH_TODO: {
			const data = payload;
			return { ...state, length: data };
		}
		default: {
			return state;
		}
	}
};
