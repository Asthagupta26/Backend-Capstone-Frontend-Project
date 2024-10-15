import axios from "axios";
import { handleApiResponse } from "../helper";
export const register = async (data) => {
 console.log(data)
    const res =  await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, data, {

        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
console.log(res);
    return handleApiResponse(res);
}
export const login = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/login`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}