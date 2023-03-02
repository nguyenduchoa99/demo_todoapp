import { DELETE_TODO, EDIT_TODO, FILTER_TODO, LENGTH_TODO, SUBMIT_TODO, TOGGLE_TODO } from '../types/todo.types';

export const submitTodo = payload => ({
	type: SUBMIT_TODO,
	payload
});

export const deleteTodo = payload => ({
	type: DELETE_TODO,
	payload
});

export const editTodo = payload => ({
	type: EDIT_TODO,
	payload
});

export const toggleTodo = payload => ({
	type: TOGGLE_TODO,
	payload
});

export const filterTodo = payload => ({
	type: FILTER_TODO,
	payload
});

export const lengthTodo = payload => ({
	type: LENGTH_TODO,
	payload
});
