import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoServices from 'src/services/todo.services';

const initialState = {
	todoList: [],
	isLoading: false,
	error: null,
	editTodo: null,
	filter: 'all',
	lengthTodo: 0
};

export const getTodo = createAsyncThunk('todo/fetchData', async (_, { rejectWithValue }) => {
	try {
		const { data } = await todoServices.getTodo();
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		todoToggle: (state, { payload }) => {
			const todoToggle = state.todoList;
			const index = todoToggle.findIndex(element => element.id === payload.id);
			todoToggle[index].completed = !todoToggle[index].completed;
			state.todoList = todoToggle;
		},

		deleteTodo: (state, { payload }) => {
			const todoDelete = state.todoList.filter(element => element.id !== payload.id);
			state.todoList = todoDelete;
		},

		editTodo: (state, { payload }) => {
			state.editTodo = payload;
		},

		submitTodo: (state, { payload }) => {
			if (state.editTodo) {
				const todoCopy = state.todoList;
				const index = todoCopy.findIndex(element => element.id === state.editTodo.id);
				todoCopy[index].title = payload;
				state.todoList = todoCopy;
			} else {
				const data = state.todoList;
				data.unshift({ id: Date.now(), title: payload, completed: false });
				state.todoList = data;
			}
		},

		filterTodo: (state, { payload }) => {
			const data = payload;
			state.filter = data;
		},

		lengthTodo: (state, { payload }) => {
			const data = payload;
			state.lengthTodo = data;
		}
	},
	extraReducers: builder => {
		builder.addCase(getTodo.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getTodo.fulfilled, (state, { payload }) => {
			state.todoList = payload;
			state.isLoading = false;
		});
		builder.addCase(getTodo.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		});
	}
});

export const { todoToggle, deleteTodo, submitTodo, editTodo, filterTodo, filterChangeTodo, lengthTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
