import { configureStore } from '@reduxjs/toolkit';
import memesReducer from '../features/memes/memesSlice';
export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});
