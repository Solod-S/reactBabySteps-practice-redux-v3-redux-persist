import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    logIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.name = action.payload;
      state.logIn = true;
    },
    logOut(state) {
      state.name = '';
      state.logIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
// екшены
