import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  error: boolean;
  successful: boolean;
};
const initialState = {
  error: false,
  successful: false,
} as InitialState;

const successfulSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    toggleError(state) {
      state.error = !state.error;
    },
    toggleSuccessful(state) {
      state.successful = !state.successful;
    },
  },
});

export const { toggleError, toggleSuccessful } = successfulSlice.actions;
export default successfulSlice.reducer;
