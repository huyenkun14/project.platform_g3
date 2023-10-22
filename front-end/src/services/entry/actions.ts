import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { ENTRY } from "../../constants/api";
import formdata from "../../httpClient/formData";

export const getAllEntryAction = createAsyncThunk(
    'entry/getAllEntryAction',
    async () => {
        const res = await httpClient.get(ENTRY.GET_ALL)
        return res.data
    }
)

export const getEntryByMonthAction = createAsyncThunk(
    'entry/getEntryByMonthAction',
    async (month: string) => {
        const res = await httpClient.get(`${ENTRY.GET_ALL}?monthAndYear=${month}`)
        return res.data
    }
)

export const getEntryByIdAction = createAsyncThunk(
    'entry/getEntryByIdAction',
    async (id: number) => {
        const res = await httpClient.get(`${ENTRY.GET_BY_ID}?transactionId=${id}`)
        return res.data
    }
)

export const createEntryAction = createAsyncThunk(
    'entry/createEntryAction',
    async (payload: {}) => {
        const res = await formdata.post(ENTRY.CREATE, payload)
        return res.data
    }
)

export const updateEntryAction = createAsyncThunk(
    'entry/updateEntryAction',
    async (data: {}) => {
        const res = await formdata.put(ENTRY.UPDATE, data)
        return res.data
    }
)

export const deleteEntryAction = createAsyncThunk(
    'entry/deleteEntryAction',
    async (id: number) => {
        const res = await httpClient.delete(`${ENTRY.DELETE}?transactionId=${id}`)
        return res.data
    }
)