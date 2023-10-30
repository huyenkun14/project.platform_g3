import { createSlice } from "@reduxjs/toolkit"
import { createBudgetAction, getAllBudgetAction, getBudgetByMonthAction } from "./actions"

interface IBudget {
    loading: boolean,
    res: [],
    message: string,
}

const initialState:IBudget = {
    res: [],
    loading: false,
    message: '',
}

export const authSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBudgetAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(createBudgetAction.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(createBudgetAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getAllBudgetAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getAllBudgetAction.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
              };
        })
        builder.addCase(getAllBudgetAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getBudgetByMonthAction.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(getBudgetByMonthAction.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                res: action.payload.data
              };
        })
        builder.addCase(getBudgetByMonthAction.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
    }
})