import logImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      console.log(result.user);
      updateUserProfile(data.name, data.photoURL).then(() => {
        // console.log("User Is created and updated");
        reset();
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "SignUp Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          }
        });
      });
    });
  };
  //   const [disabled, setDisabled] = useState(true);
  //   const captchaRef = useRef(null);
  //   useEffect(() => {
  //     loadCaptchaEnginge(6);
  //   }, []);

  //   const handelCaptcha = () => {
  //     const user_captcha_value = captchaRef.current.value;
  //     // console.log(value);
  //     if (validateCaptcha(user_captcha_value) == true) {
  //       setDisabled(false);
  //     }
  //   };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="hero min-h-screen"
    >
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className="hero-content flex-col lg:flex-row shadow-xl shadow-gray-500"
      >
        <Helmet>
          <title>Bistro | SignUp</title>
        </Helmet>
        <div className="text-center lg:text-left">
          <img src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                name="name"
                className="input rounded-sm"
              />
              {errors.name && (
                <span className=" text-red-500 mt-2">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                {...register("photoURL", { required: true })}
                className="input rounded-sm"
              />
              {errors.photoURL && (
                <span className=" text-red-500 mt-2">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input rounded-sm"
              />
              {errors.email && (
                <span className=" text-red-500 mt-2">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                })}
                className="input rounded-sm"
              />
              {errors.password?.type === "required" && (
                <span className=" text-red-500 mt-2">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className=" text-red-500 mt-2">
                  Password Must be at least 8 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className=" text-red-500 mt-2">
                  Password must contain at least 1 numeric character at least 1
                  lowercase letter at least 1 uppercase letter at least 1
                  special character
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {/* <label className="label flex justify-center items-center">
                <LoadCanvasTemplate />
              </label>
              <input
                // onBlur={handelCaptcha}
                // ref={captchaRef}
                type="captcha"
                placeholder="Type here"
                name="captcha"
                className="input rounded-sm"
                required
              /> */}
            </div>
            {/* <button
              className=" btn btn-xs btn-primary w-1/3 my-3"
            //   onClick={handelCaptcha}
            >
              Validate
            </button> */}
            <div className="form-control">
              <input
                type="submit"
                className="btn btn-primary bg-[#D1A054] hover:bg-[#c28d3e]  text-white border-none"
                value="Sign Up"
              />
            </div>
            <div className=" text-center">
              <p className=" text-[#e9b86f] font-medium">
                Already Registered?{" "}
                <span className=" font-bold">
                  <Link to={"/login"}>Go to login</Link>{" "}
                </span>
              </p>
              <p className=" text-lg my-3">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
