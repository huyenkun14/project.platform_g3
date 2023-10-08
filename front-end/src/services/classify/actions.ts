import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { CLASSIFY } from "../../constants/api";

export const getAllClassifyAction = createAsyncThunk(
    'classify/getAllClassifyAction',
    async () => {
        const res = await httpClient.get(CLASSIFY.GET_ALL)
        return res.data
    }
)

export const getClassifyByIdAction = createAsyncThunk(
    'classify/getClassifyByIdAction',
    async (id: number) => {
        const res = await httpClient.get(`${CLASSIFY.GET_ALL}?categoryId=${id}`)
        return res.data
    }
)

export const createClassifyAction = createAsyncThunk(
    'classify/createClassifyAction',
    async (payload: {}) => {
        const res = await httpClient.post(CLASSIFY.CREATE, payload)
        return res.data
    }
)

export const updateClassifyAction = createAsyncThunk(
    'classify/updateClassifyAction',
    async (id: number) => {
        const res = await httpClient.put(`${CLASSIFY.UPDATE}?categoryId=${id}`)
        return res.data
    }
)

export const deleteClassifyAction = createAsyncThunk(
    'classify/deleteClassifyAction',
    async (id: number) => {
        const res = await httpClient.delete(`${CLASSIFY.DELETE}?categoryId=${id}`)
        return res.data
    }
)