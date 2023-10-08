import { createSlice } from "@reduxjs/toolkit"
import { getAllEntryAction, createEntryAction } from "./actions"

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
    name: 'entry',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createEntryAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(createEntryAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(createEntryAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getAllEntryAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getAllEntryAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(getAllEntryAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
    }
})