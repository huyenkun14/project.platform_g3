import axios from "axios";
import { BASE_URL } from "../constants/api";

const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        Accept: '*/*',
    }
})

export default httpClient