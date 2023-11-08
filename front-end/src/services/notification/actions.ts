import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { WARNING } from "../../constants/api";
import formdata from "../../httpClient/formData";

export const getAllWarningAction = createAsyncThunk(
    'warning/getAllWarningAction',
    async () => {
        const res = await httpClient.get(WARNING.GET_ALL)
        return res.data
    }
)

export const checkWarningAction = createAsyncThunk(
    'warning/checkWarningAction',
    async (data: {}) => {
        const res = await formdata.post(WARNING.CHECK, data)
        return res.data
    }
)
