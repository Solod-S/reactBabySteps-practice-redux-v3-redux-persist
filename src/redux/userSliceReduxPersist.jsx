import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'clicks',
  initialState: { clicks: 0 },
  reducers: {
    update(state, action) {
      state.clicks += action.payload;
    },
  },
});

export const { update } = clickSlice.actions;

// export default clickSlice.reducer;
// можно и без него так как clickSlice уже импортировали
