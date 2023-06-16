import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reducers.ts';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
