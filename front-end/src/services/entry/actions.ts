import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { ENTRY } from "../../constants/api";

export const getAllEntryAction = createAsyncThunk(
    'entry/getAllEntryAction',
    async () => {
        const res = await httpClient.get(ENTRY.GET_ALL)
        return res.data
    }
)

export const getEntryByIdAction = createAsyncThunk(
    'entry/getEntryByIdAction',
    async (id: number) => {
        const res = await httpClient.get(`${ENTRY.GET_ALL}?transactionId=${id}`)
        return res.data
    }
)

export const createEntryAction = createAsyncThunk(
    'entry/createEntryAction',
    async (payload: {}) => {
        const res = await httpClient.post(ENTRY.CREATE, payload)
        return res.data
    }
)

export const updateEntryAction = createAsyncThunk(
    'entry/updateEntryAction',
    async (id: number) => {
        const res = await httpClient.put(`${ENTRY.UPDATE}?transactionId=${id}`)
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