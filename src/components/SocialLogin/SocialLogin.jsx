import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handelGoogleSignIn =() =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo ={
                name:result.user?.displayName,
                email:result.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
            })
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className=" space-x-8 ">
            <button onClick={handelGoogleSignIn} className=" btn btn-outline border-2 rounded-full">
            <FaGoogle></FaGoogle>
            </button>
            <button className=" btn btn-outline border-2 rounded-full">
                <FaFacebook></FaFacebook>
            </button>
            <button className=" btn btn-outline border-2 rounded-full">
                <FaGithub></FaGithub>
            </button>
        </div>
    );
};

export default SocialLogin;