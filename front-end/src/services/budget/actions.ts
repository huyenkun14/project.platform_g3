import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { BUDGET } from "../../constants/api";

export const getAllBudgetAction = createAsyncThunk(
    'budget/getAllBudgetAction',
    async () => {
        const res = await httpClient.get(BUDGET.GET_ALL)
        return res.data
    }
)

export const getBudgetByIdAction = createAsyncThunk(
    'budget/getBudgetByIdAction',
    async (id: number) => {
        const res = await httpClient.get(`${BUDGET.GET_BY_ID}?budgetId=${id}`)
        return res.data
    }
)

export const getBudgetGetOverAction = createAsyncThunk(
    'budget/getBudgetGetOverAction',
    async () => {
        const res = await httpClient.get(BUDGET.GET_OVER)
        return res.data
    }
)

export const createBudgetAction = createAsyncThunk(
    'budget/createBudgetAction',
    async (payload: {}) => {
        const res = await httpClient.post(BUDGET.CREATE, payload)
        return res.data
    }
)

export const updateBudgetAction = createAsyncThunk(
    'budget/updateBudgetAction',
    async (id: number) => {
        const res = await httpClient.put(`${BUDGET.UPDATE}?categoryId=${id}`)
        return res.data
    }
)

export const deleteBudgetAction = createAsyncThunk(
    'budget/deleteBudgetAction',
    async (id: number) => {
        const res = await httpClient.delete(`${BUDGET.DELETE}?categoryId=${id}`)
        return res.data
    }
)