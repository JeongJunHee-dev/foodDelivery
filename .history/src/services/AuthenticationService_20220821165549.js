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
        return {status: false, message: "믄가 잘못이 되었다."};
    }
};

const login = async user => {
    if (!user?.username || !user?.password) {
      return {status: false, message: '공간에 여백없이 채우세요'};
    }
    try {
      let requestBody = {
        username: user?.username,
        password: user?.password,
      };
      let loginResponse = await AuthRequest.post(
        ApiContants.BACKEND_API.LOGIN,
        requestBody,
      );
      return loginResponse?.data;
    } catch (error) {
      console.log(error);
      return {status: false, message: '믄가 잘못이 되었다.'};
    }
  };

const checkUserExist = async (type, value) => {
    
    try{
        let params = {[type]: value};
        let userCheckResponse = await AuthRequest.get(
        ApiContants.BACKEND_API.USER_EXIST,
        {params},
        );
        return userCheckResponse?.data;
    } catch (error) {
            console.log(error);
        return {status: false, message: "믄가 잘못이 되었다."};
    }
};

export default {register, checkUserExist};