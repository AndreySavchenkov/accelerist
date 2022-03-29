import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserT } from 'redux/login/type';

type InitialState = {
  accessToken: string;
  user: UserT;
};

const initialState = {} as InitialState;

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ accessToken: string; user: UserT }>) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    signUp(state, action: PayloadAction<{ accessToken: string; user: UserT }>) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { signIn, signUp } = loginSlice.actions;
export default loginSlice.reducer;
