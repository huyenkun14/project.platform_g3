/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';
interface IThemeState {
    mode: string
}
const initialState: IThemeState = {
    mode: 'light',
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state: any, action) => {
            return {
                ...state,
                mode: action.payload
            }
        }
    },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
