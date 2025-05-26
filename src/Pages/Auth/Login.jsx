import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { useAuth } from "../../context/Authentication";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMSg] = useState();

  const { dispatch, email: Email, isAuthenticated } = useAuth();

  console.log(error);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!email && !password)) {
      setError(false);
      setErrorMSg("This field is required");
    }
    if (email && password) {
      setError(true);
      const data = {
        email: email,
        password: password,
      };
      dispatch({ type: "login", payload: data });
      navigate("/home");
    }
  };
  return (
    <div className="flex flex-col gap-[4rem] items-center justify-center max-w-[100vh]   m-auto h-[100vh] ">
      <img src="/assets/logo.svg" />
      <form
        className="flex-col flex gap-3 bg-[#161D2F] w-[80%] md:w-[60%] lg:w-[46%] px-6 py-[2rem]  rounded-lg"
        onSubmit={(e) => onSubmit(e)}
      >
        <h2 className="text-white font-light  text-[32px] font-Outfit">
          Login
        </h2>
        <div className="w-full flex flex-col gap-1">
          <input
            type="text"
            name="email"
            placeholder="Email address"
            className="border-b autofill:shadow-[inset_0_0_0px_1000px_#161D2F]  border-gray-200  autofill:text-gray-600 active:outline-none outline-none py-1 px-1 text-white font-Outfit text-[15px] font-light focus:text-red-500 cursor-pointer"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email && !error && (
            <p className="text-[8px] text-red-500 justify-end w-full items-end flex">
              {errorMsg}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1 ">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-b   active:outline-none active:border-none outline-none py-1 px-1 font-Outfit text-[15px] font-light text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!password && !error && (
            <p className="text-[8px] text-red-500 justify-end w-full items-end flex">
              {errorMsg}
            </p>
          )}
        </div>

        <button className="bg-[#FC4747] px-3 py-2 rounded-md text-white font-Outfit font-light text-[15px] w-full">
          Login to your account
        </button>

        <h5 className="flex gap-2 text-center items-center justify-center text-white font-Outfit text-[15px]">
          Don't have an account?
          <span
            className="text-[#FC4747] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </h5>
      </form>
    </div>
  );
}

export default Login;
