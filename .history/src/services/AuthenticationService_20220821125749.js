import axios from "axios";
import { ApiContants } from "../constant";

const AuthRequest = axios.create({ baseURL: ApiContants.BACKEND_API.BASE_API_URL,});

const register = async (user) => {
    if(!user?.username || !user?.email || !user?.password){
        return {status: false,message: '공간에 여백없이 채우세요'};
    }
    try{
        let requestBody ={
            username: user?.username,
            email: user?.email,
            password: user?.password
        };
        console.log(registerResponse?.data);
        let registerResponse = await AuthRequest.post(ApiContants.BACKEND_API.REGISTER, requestBody);
        return registerResponse?.data;
    } catch(error) {
        console.log(error)
        return {status: false, message: "믄가 잘못이 되었다."}
    }
};

export default {register};