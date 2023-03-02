import axios from 'axios';
import { create } from 'zustand';

const todoStore = create(set => ({
	todoList: [],
	editTodo: null,
	filter: 'all',
	error: undefined,
	lengthTodo: 0,

	getData: async () => {
		try {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
			set(state => ({ ...state, todoList: data }));
		} catch (error) {
			set(state => ({ ...state, error }));
		}
	},

	handleToggle: todo =>
		set(state => {
			const todoCopy = state.todoList;
			const index = todoCopy.findIndex(element => element.id === todo.id);
			todoCopy[index].completed = !todoCopy[index].completed;
			return { ...state, todoList: todoCopy };
		}),

	handleDelete: todo =>
		set(state => {
			const data = state.todoList.filter(element => element.id !== todo.id);
			return { ...state, todoList: data };
		}),

	handleEdit: todo => set(state => ({ ...state, editTodo: todo })),

	handleSubmit: value =>
		set(state => {
			if (state.editTodo) {
				const data = state.todoList.map(todo => (todo.id === state.editTodo.id ? { ...todo, title: value } : todo));
				return { ...state, todoList: data, editTodo: null };
			} else {
				const data = state.todoList;
				data.push({ id: Date.now(), title: value, completed: false });
				return { ...state, todoList: data };
			}
		}),

	handleFilter: filter =>
		set(state => {
			const data = filter;
			return { ...state, filter: data };
		}),

	getLength: todo =>
		set(state => {
			const data = todo;
			return { ...state, lengthTodo: data };
		})
}));

export default todoStore;
