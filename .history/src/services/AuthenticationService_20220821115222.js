import axios from "axios";
import { ApiContants } from "../constant";

const AuthRequest = axios.create({ baseURL: ApiContants.BACKEND_API.BASE_API_URL,});

const register = async (user) => {
    if(!user?.username || !user?.email || !user?.password){
        return {status: false,message: '공간에 여백없이 채우세요'};
    }
    try{

    } catch(error) {

    }
}