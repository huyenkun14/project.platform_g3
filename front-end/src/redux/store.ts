/* eslint-disable prettier/prettier */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    // more reducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

