import { createSlice } from "@reduxjs/toolkit"
import { getAllEntryAction, createEntryAction, getEntryByIdAction, getEntryByMonthAction } from "./actions"

interface IEntry {
    loading: boolean,
    res: [],
    message: string,
}

const initialState:IEntry = {
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
        builder.addCase(getAllEntryAction.fulfilled, (state,action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
              };
        })
        builder.addCase(getAllEntryAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getEntryByMonthAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getEntryByMonthAction.fulfilled, (state,action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
              };
        })
        builder.addCase(getEntryByMonthAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getEntryByIdAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getEntryByIdAction.fulfilled, (state,action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
              };
        })
        builder.addCase(getEntryByIdAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
    }
})