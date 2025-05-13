import React from "react";

function Login() {
  return (
    <div className="flex flex-col gap-[5rem] items-center justify-center w-full   m-auto h-full ">
      <img src="/assets/logo.svg" />
      <form className="flex-col flex gap-5 bg-[#161D2F] w-[36%] px-6 py-[2rem]  rounded-lg">
        <h2 className="text-white font-bold text-3xl ">Login</h2>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="border-b  border-gray-200 active:outline-none outline-none text-white focus:text-red-500 cuso"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="border-b  border-gray-200 active:outline-none outline-none"
        />
        <button className="bg-[#FC4747] px-3 py-2 rounded-md text-white">
          Login to your account
        </button>
        <h5 className="flex gap-2 text-center items-center justify-center text-white">
          Don't have an account?
          <span className="text-[#FC4747]">Sign up</span>
        </h5>
      </form>
    </div>
  );
}

export default Login;
