import React, { useState } from "react";
import HomeImg from "../assets/login.svg";
import FbImg from "../assets/fb.png";
import google from "../assets/google.jpg";
import { Mail, Eye, EyeOff, FacebookIcon } from "lucide-react";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-row justify-between">
      <div className=" flex justify-center flex-col  px-24">
        <div className="w-full flex flex-col items-start justify-center text-start">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <p className="mt-2">
              Shape your story, one click at a time.
              <br />
              Sign in to begin your intern journey.
            </p>
          </div>
          <div className="flex flex-col mt-10 gap-5">
            <div className="flex flex-col gap-2 relative">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="p-3 bg-[#f8f8f8] rounded-xl pr-14 outline-none border-1 border-[#d7d7d7]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail
                size={20}
                className="absolute bottom-3 right-3 text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="p-3 bg-[#f8f8f8] rounded-xl  pr-14 outline-none border-1 border-[#d7d7d7]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  size={20}
                  className="absolute bottom-3 right-3 text-gray-400 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(!showPassword)}
                  size={20}
                  className="absolute bottom-3 right-3 text-gray-400 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="w-full flex items-end justify-end mt-3">
            <p className="text-blue-500 text-sm cursor-pointer hover:underline">
              forgot password?
            </p>
          </div>
          <div className="w-full ">
            <button className="p-3 w-full rounded-xl text-white font-semibold text-center bg-blue-500 mt-5 hover:bg-blue-400 cursor-pointer">
              Sign in
            </button>
          </div>
          <div className="w-full flex items-center justify-center gap-4 mt-3">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <div className="w-full relative">
            <img
              src={google}
              alt="googleimg"
              loading="lazy"
              className="w-8 h-8 absolute bottom-2 left-5 text-white  rounded-full"
            />
            <button className="p-3 w-full rounded-xl text-black font-medium text-center bg-gray-200 mt-5 hover:bg-gray-400 cursor-pointer">
              Sign in with Google
            </button>
          </div>
          <div className="w-full relative">
            <img
              src={FbImg}
              alt="fbImg"
              loading="lazy"
              className="w-8 h-8 absolute bottom-2 left-5 text-white  rounded-full"
            />
            <button className="p-3 w-full rounded-xl text-black font-medium text-center bg-gray-200 mt-5 hover:bg-gray-400 cursor-pointer">
              Sign in with Facebook
            </button>
          </div>
          <div className="mt-5 flex items-center justify-center ">
            <span>
              Don't have an account?
              <span className="text-blue-500 text-md cursor-pointer hover:underline">
                Sign up
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-2/4 flex items-center justify-center bg-blue-200 rounded-l-3xl">
        <img
          src={HomeImg}
          loading="lazy"
          alt="loginImage"
          className="w-[550px] h-[550px]"
        />
      </div>
    </div>
  );
};

export default Loginpage;
