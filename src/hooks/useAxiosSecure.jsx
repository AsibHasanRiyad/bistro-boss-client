import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5001/'
})
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    //request interceptor to add authorization headers for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptor', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })

    //intercepts 401 and 403
    axiosSecure.interceptors.response.use(function(config){
        return config
    }, async (error) =>{
        // console.log('error code', error);
        console.log(error.response.status);
        const status = error.response.status

        //for 401 and 403 logout the user and navigate the user to the login page 
        if (status === 401 || status === 403) {
            await logOut();
            return navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;