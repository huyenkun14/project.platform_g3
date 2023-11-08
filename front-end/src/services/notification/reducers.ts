import { createSlice } from "@reduxjs/toolkit"
import { getAllWarningAction, checkWarningAction } from "./actions"

interface IUSER {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IUSER = {
    res: [],
    loading: false,
    message: '',
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllWarningAction.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getAllWarningAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getAllWarningAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(checkWarningAction.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(checkWarningAction.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
            };
        })
        builder.addCase(checkWarningAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
    }
})