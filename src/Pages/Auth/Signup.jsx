import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authentication";

function Signup() {
  const { dispatch, email: Email } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password && !repeatPassword) return;

    if (password !== repeatPassword) {
      setError("Password does not match");
    }
    if (email && password === repeatPassword) {
      const data = {
        email: email,
        password: password,
        repeatPassword: repeatPassword,
      };

      dispatch({ type: "signUp", payload: data });
      navigate("/login");
    }
  }
  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center    m-auto h-[100vh] ">
      <img src="/assets/logo.svg" />

      <div
        className={`${
          error
            ? "bg-[#FC4747] text-white font-Outfit py-3 px-[4rem] rounded-lg"
            : ""
        }`}
      >
        <p>{error}</p>
      </div>
      <form
        className="flex-col flex gap-5 bg-[#161D2F] w-[80%] md:w-[60%] lg:w-[46%] 2xl:w-[27%] px-6 py-[2rem]  rounded-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-white font-light text-[32px] font-Outfit ">
          Sign Up
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="border-b autofill:shadow-[inset_0_0_0px_1000px_#161D2F]  border-gray-200  autofill:text-gray-600 active:outline-none outline-none py-1 px-1 text-white font-Outfit text-[15px] font-light focus:text-red-500 "
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-b autofill:shadow-[inset_0_0_0px_1000px_#161D2F]  border-gray-200  autofill:text-gray-600 active:outline-none outline-none py-1 px-1 text-white font-Outfit text-[15px] font-light focus:text-red-500 "
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="Repeat password"
          placeholder="Repeat Password"
          className="border-b autofill:shadow-[inset_0_0_0px_1000px_#161D2F]  border-gray-200  autofill:text-gray-600 active:outline-none outline-none py-1 px-1 text-white font-Outfit text-[15px] font-light focus:text-red-500 "
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button className="bg-[#FC4747] px-3 py-2 rounded-md text-white font-Outfit font-light text-[15px] cursor-pointer">
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
