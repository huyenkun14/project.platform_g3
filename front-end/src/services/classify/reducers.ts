import { createSlice } from "@reduxjs/toolkit"
import { getAllClassifyAction, createClassifyAction } from "./actions"

interface IClassify {
    loading: boolean,
    res: [],
    message: string,
}

const initialState:IClassify = {
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
        builder.addCase(getAllClassifyAction.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
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