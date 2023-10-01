import { createSlice } from "@reduxjs/toolkit"
import { registerActions } from "./actions"

interface IAuth {
    loading: boolean,
    res: [],
    message: string,
}

const initialState:IAuth = {
    res: [],
    loading: false,
    message: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerActions.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(registerActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(registerActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
    }
})