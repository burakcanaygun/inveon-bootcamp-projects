import { configureStore } from '@reduxjs/toolkit';
import offcanvasReducer from '../features/offcanvas/offcanvasSlice';
import todosReducer from '../features/todos/todosSlicer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    offcanvas: offcanvasReducer,
  },
});
