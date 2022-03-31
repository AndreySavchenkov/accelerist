import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  error: boolean;
  successful: boolean;
  preload: boolean;
};
const initialState = {
  error: false,
  successful: false,
  preload: false,
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
    setPreload(state) {
      state.preload = true;
    },
    unsetPreload(state) {
      state.preload = false;
    },
  },
});

export const { toggleError, toggleSuccessful, setPreload, unsetPreload } =
  successfulSlice.actions;
export default successfulSlice.reducer;
