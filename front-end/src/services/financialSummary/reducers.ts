import { createSlice } from "@reduxjs/toolkit"
import { getFinancialValueAction, getFinancialYearlyAction } from "./actions";

interface IFinancial {
    loading: boolean,
    res: [],
    message: string,
}

const initialState:IFinancial = {
    res: [],
    loading: false,
    message: '',
}

export const authSlice = createSlice({
    name: 'financial',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFinancialYearlyAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getFinancialYearlyAction.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data,
              };
        })
        builder.addCase(getFinancialYearlyAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getFinancialValueAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getFinancialValueAction.fulfilled, (state,action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
              };
        })
        builder.addCase(getFinancialValueAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
    }
})