import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increaseScore: (state, action) => {
      state.score = action.payload;
    },
    increaseCurrentQuestionIndex: state => {
      state.currentQuestionIndex += 1;
    },
    resetCurrentQuestionIndex: state => {
      state.currentQuestionIndex = 0;
    },
    resetScore: state => {
      state.score = 0;
    },
  },
});

export const { increaseScore, increaseCurrentQuestionIndex, resetCurrentQuestionIndex, resetScore } = quizSlice.actions;

export default quizSlice.reducer;
