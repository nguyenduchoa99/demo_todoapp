import { configureStore } from '@reduxjs/toolkit';

import todoSlice from '@components/slice/todo.slice';

const store = configureStore({
	reducer: {
		todos: todoSlice
	}
});

export default store;
