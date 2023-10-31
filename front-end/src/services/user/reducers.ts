import { createSlice } from "@reduxjs/toolkit"
import { getInfoUserAction, updateInfoUserAction } from "./actions"

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
        builder.addCase(getInfoUserAction.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getInfoUserAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getInfoUserAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateInfoUserAction.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateInfoUserAction.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
            };
        })
        builder.addCase(updateInfoUserAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
    }
})