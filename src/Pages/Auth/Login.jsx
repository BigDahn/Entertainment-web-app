import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[4rem] items-center justify-center max-w-[100vh]   m-auto h-[100vh] ">
      <img src="/assets/logo.svg" />
      <form className="flex-col flex gap-5 bg-[#161D2F] w-[46%] px-6 py-[2rem]  rounded-lg">
        <h2 className="text-white font-light  text-[32px] font-Outfit">
          Login
        </h2>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="border-b  border-gray-200 active:outline-none outline-none text-white font-Outfit text-[15px] font-light focus:text-red-500 cuso"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="border-b  border-gray-200 active:outline-none outline-none font-Outfit text-[15px] font-light text-white"
        />

        <button
          className="bg-[#FC4747] px-3 py-2 rounded-md text-white font-Outfit font-light text-[15px] w-full"
          onClick={() => navigate("/home")}
        >
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
