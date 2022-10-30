import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const clickSlice = createSlice({
  name: 'clicks',
  initialState: { clicks: 0 },
  reducers: {
    update(state, action) {
      state.clicks += action.payload;
    },
  },
});

export const { update } = clickSlice.actions;

const persistConfig = {
  key: 'clicks',
  storage,
  // blacklist: ['clicks'],
  // если хочу исключить store.reducer.click
  //whitelist: ['clicks']
  // если хочу сохранять только store.reducer.click
};

export const persisteClickdReducer = persistReducer(
  persistConfig,
  clickSlice.reducer
);

// export default clickSlice.reducer;
// можно и без него так как clickSlice уже импортировали

//////////////------------SELTOR

export const storeClicsValue = state => state.click.clicks;
