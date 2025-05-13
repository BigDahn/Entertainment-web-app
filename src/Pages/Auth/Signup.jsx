import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[5rem] items-center justify-center max-w-[100vh]   m-auto h-[100vh] ">
      <img src="/assets/logo.svg" />
      <form className="flex-col flex gap-5 bg-[#161D2F] w-[46%] px-6 py-[2rem]  rounded-lg">
        <h2 className="text-white font-light text-[32px] font-Outfit ">
          Sign Up
        </h2>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="border-b  border-gray-200 active:outline-none outline-none text-white focus:text-red-500 font-Outfit font-light text-[15px] "
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="border-b  border-gray-200 active:outline-none outline-none font-Outfit font-light text-[15px] text-white"
        />
        <input
          type="text"
          name="Repeat password"
          placeholder="Repeat Password"
          className="border-b  border-gray-200 active:outline-none outline-none font-Outfit font-light text-[15px] text-white"
        />
        <button
          className="bg-[#FC4747] px-3 py-2 rounded-md text-white font-Outfit font-light text-[15px] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Create an account
        </button>
        <h5 className="flex gap-2 text-center items-center justify-center text-white font-Outfit text-[15px] font-light">
          Already have an account?
          <span
            className="text-[#FC4747] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </h5>
      </form>
    </div>
  );
}

export default Signup;
