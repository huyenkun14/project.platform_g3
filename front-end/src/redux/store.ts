/* eslint-disable prettier/prettier */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    // more reducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

