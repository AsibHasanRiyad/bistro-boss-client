import logImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const {singIn} = useContext(AuthContext)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
    .then(data =>{
      console.log(data.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log in Successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
  };

  const handelCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    // console.log(value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="hero min-h-screen"
    >
      <helmet>
        <title>Bistro | Login</title>
      </helmet>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className="hero-content flex-col lg:flex-row shadow-xl shadow-gray-500"
      >
        <div className="text-center lg:text-left">
          <img src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input rounded-sm"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label flex justify-center items-center">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handelCaptcha}
                ref={captchaRef}
                type="captcha"
                placeholder="Type here"
                name="captcha"
                className="input rounded-sm"
                required
              />
            </div>
            {/* <button
              className=" btn btn-xs btn-primary w-1/3 my-3"
            //   onClick={handelCaptcha}
            >
              Validate
            </button> */}
            <div className="form-control">
              <button
                onSubmit={handelLogin}
                disabled={disabled}
                type="submit"
                className="btn btn-primary bg-[#D1A054] text-white border-none"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
