import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { useAuth } from "../../context/Authentication";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { dispatch, user } = useAuth();

  console.log(user);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const data = {
      email: email,
      password: password,
    };
    dispatch({ type: "login", payload: data });
    navigate("/home");
  };
  return (
    <div className="flex flex-col gap-[4rem] items-center justify-center max-w-[100vh]   m-auto h-[100vh] ">
      <img src="/assets/logo.svg" />
      <form
        className="flex-col flex gap-5 bg-[#161D2F] w-[46%] px-6 py-[2rem]  rounded-lg"
        onSubmit={(e) => onSubmit(e)}
      >
        <h2 className="text-white font-light  text-[32px] font-Outfit">
          Login
        </h2>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="border-b  border-gray-200 active:outline-none outline-none py-1 px-1 text-white font-Outfit text-[15px] font-light focus:text-red-500 cursor-pointer"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-b  border-gray-200 active:outline-none outline-none py-1 px-1 font-Outfit text-[15px] font-light text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

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
