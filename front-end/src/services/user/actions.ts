import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { USER } from "../../constants/api";
import formdata from "../../httpClient/formData";

export const getInfoUserAction = createAsyncThunk(
    'user/getInfoUserAction',
    async () => {
        const res = await httpClient.get(USER.GET)
        return res.data
    }
)

export const updateInfoUserAction = createAsyncThunk(
    'user/updateInfoUserAction',
    async (data: {}) => {
        const res = await formdata.put(USER.UPDATE, data)
        return res.data
    }
)

export const resetPasswordAction = createAsyncThunk(
    'user/resetPasswordAction',
    async (data: {}) => {
        const res = await httpClient.put(USER.RESET_PASSWORD, data)
        return res.data
    }
)
