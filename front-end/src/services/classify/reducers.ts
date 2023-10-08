import { createSlice } from "@reduxjs/toolkit"
import { getAllClassifyAction, createClassifyAction } from "./actions"

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
    name: 'classify',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createClassifyAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(createClassifyAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(createClassifyAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getAllClassifyAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getAllClassifyAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(getAllClassifyAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
    }
})