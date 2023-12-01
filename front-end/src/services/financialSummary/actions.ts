import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../httpClient";
import { CHART, ENTRY } from "../../constants/api";
import formdata from "../../httpClient/multipartData";

export const getFinancialYearlyAction = createAsyncThunk(
    'financial/getFinancialYearlyAction',
    async (year: String) => {
        const res = await httpClient.get(`${CHART.YEARLY}?year=${year}`)
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

