import axios from "axios";
import {addTokenToHeaders} from "../helper/index.js";

export default function getAllJobs(){
    const headers = addTokenToHeaders({headers: {}});
    const res = axios.get(`${import.meta.env.VITE_BASE_URL} /api/v1/job`,{
        headers
        
    });
    return res;
}