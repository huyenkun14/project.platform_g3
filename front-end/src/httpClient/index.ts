import axios from "axios";
import { BASE_URL } from "../constants/api";
import { getItemObjectAsyncStorage } from "../../utils/asyncStorage";
import { KEY_STORAGE } from "../constants/storage";

const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        Accept: '*/*',
        
    }
})

let token
const getToken = async () => {
  token = await getItemObjectAsyncStorage(KEY_STORAGE.SAVED_INFO);
} 
httpClient.interceptors.request.use(function (config) {
  getToken()
  config.headers.Authorization = token ? `Bearer ${token.accessToken}` : '';
  return config;
});

httpClient.interceptors.response.use(
  function (response) {
    console.log('API', response);

    return response;
  },
  //   function (error) {
  //     if (error.response && error.response.status === 401) {
  //       // Go to login page
  //       const tokenExpired = getCookie(COOKIE_KEYS.TOKEN_EXPIRED_DATE);
  //       // const tokenExpiredDate = new Date(tokenExpired);
  //       if (tokenExpired.getTime() < new Date().getTime()) {
  //         deleteAllCookies();
  //         window.location.href = '/login';
  //       }
  //     }
  //     return Promise.reject(error);
  //   },
);

export default httpClient