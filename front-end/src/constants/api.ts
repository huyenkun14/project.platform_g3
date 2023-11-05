export const BASE_URL = "https://dc5d-1-53-37-165.ngrok-free.app/api"

export const AUTH = {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
}

export const USER = {
    GET: "/v1/user",
    UPDATE: "/v1/user/update",
}

export const CLASSIFY = {
    CREATE: "/v1/category/create",
    GET_ALL: "/v1/category/get-all",
    GET_BY_ID: "/v1/category",
    UPDATE: "/v1/category/update",
    DELETE: "/v1/category/delete",
}

export const ENTRY = {
    CREATE: "/v1/transaction/create",
    GET_ALL: "/v1/transaction/get-transactions",
    GET_BY_ID: "/v1/transaction",
    UPDATE: "/v1/transaction/update",
    DELETE: "/v1/transaction/delete",
}

export const BUDGET = {
    CREATE: "/v1/budget/create",
    GET_ALL: "/v1/budget/get-all",
    GET_BY_MONTH: "/v1/budget/get-of-month",
    GET_BY_ID: "/v1/budget",
    GET_OVER: "/v1/budget/get-over",
    UPDATE: "/v1/budget/update",
    DELETE: "/v1/budget/delete",
}

export const CHART = {
    YEARLY: "/v1/financial-summary/yearly",
    EACH_CATEGORY: "/v1/financial-summary/each-category",
}

export const ICON = {
    GET_ALL: '/icon/get-all'
}