import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { CHART, ENTRY } from "../../constants/api";
import formdata from "../../httpClient/formData";

export const getFinancialYearlyAction = createAsyncThunk(
    'financial/getFinancialYearlyAction',
    async () => {
        const res = await httpClient.get(`${CHART.YEARLY}?year=2023`)
        return res.data
    }
)

export const getFinancialValueAction = createAsyncThunk(
    'financial/getFinancialValueAction',
    async (data: any) => {
        const res = await formdata.post(CHART.EACH_CATEGORY, data)
        return res.data
    }
)

