import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { persisteClickdReducer } from './userSliceReduxPersist';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// для игнора на прослойке (между отправкой в редюсер)
const myValueSlice = createSlice({
  name: 'myValueSlice',
  initialState: 11,
  reducers: {
    incrementMySlice(state, action) {
      return state + action.payload;
    },
    decrementMySlice(state, action) {
      return state - action.payload;
    },
  },
});

export const { incrementMySlice, decrementMySlice } = myValueSlice.actions;

const myItemSlice = createSlice({
  name: 'myItemSlice',
  initialState: [],
  reducers: {
    addMySlice(state, action) {
      return state.push(action.payload);
    },
    removeMySlice(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const { addMySlice, removeMySlice } = myItemSlice.actions;
console.log(myValueSlice);

// --
// --
// --
// --
// -- без createSlice
export const increment = createAction(`myValue/increment`);
export const decrement = createAction(`myValue/decrement`);

const myReducer = createReducer(11, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});
export const add = createAction(`items/add`);
export const remove = createAction(`items/remove`);

const myItems = createReducer([], {
  [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action) =>
    state.filter(item => item.id !== action.payload.id),
});
console.log(
  increment.toString(),
  ` or we can use [name of the const] === вычесляемое свойство`
);

// --
// --
// --
// --

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    myValueSlice: myValueSlice.reducer,
    items: myItems,
    itemSlice: myItemSlice.reducer,
    userSlice: userSlice.reducer,
    click: persisteClickdReducer,
  },
  //---------решение ошибки в редакс персист
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //---------решение ошибки в редакс персист (прослайка на єтапе отправки екшена в редюсер игнорит методі персиста которые стреляют ошибку)
});
// за свойство myValue отвечает редюсер myReducer

export const persistor = persistStore(store);
