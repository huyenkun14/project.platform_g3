export const BASE_URL = "http://10.0.2.2:3000/api"

export const AUTH = {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
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
    GET_ALL: "/v1/transaction/get-all",
    GET_BY_ID: "/v1/transaction",
    UPDATE: "/v1/transaction/update",
    DELETE: "/v1/transaction/delete",
}