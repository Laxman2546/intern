import React, { useState } from "react";
import HomeImg from "../assets/login.svg";
import FbImg from "../assets/fb.png";
import google from "../assets/google.jpg";
import { Mail, Eye, EyeOff, User } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postData = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/register`,
        {
          username,
          email,
          password,
        }
      );

      if (postData.status === 200) {
        localStorage.setItem("username", username);
        navigate("/internhome");
      }
    } catch (e) {
      toast.error("username already exists");
      console.log("Error occurred while registering:", e);
    } finally {
      setEmail("");
      setPassword("");
      setUsername("");
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const postLogin = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          username,
        }
      );
      if (postLogin.status === 200) {
        localStorage.setItem("username", username);
        navigate("/internhome");
      }
    } catch (e) {
      toast.error("user not found");
      console.log("error ocuured wile registering", e);
    } finally {
      setPassword("");
      setUsername("");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 flex justify-center flex-col px-6 md:px-32 py-12">
        <ToastContainer />
        {showRegister ? (
          <form method="post" onSubmit={handleRegister}>
            <div className="w-full flex flex-col items-start justify-center text-start">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Get Started</h1>
                <p className="mt-2 font-medium">
                  It starts here. It starts with you.
                  <br />
                  Register now and own your journey.
                </p>
              </div>
              <div className="flex flex-col mt-10 gap-5 w-full">
                <div className="flex flex-col gap-2 relative">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Jhon"
                    className="p-3 bg-[#f8f8f8] rounded-xl pr-14 outline-none border border-[#d7d7d7]"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <User
                    size={20}
                    className="absolute bottom-3 right-3 text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="p-3 bg-[#f8f8f8] rounded-xl pr-14 outline-none border border-[#d7d7d7]"
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
                    className="p-3 bg-[#f8f8f8] rounded-xl pr-14 outline-none border border-[#d7d7d7]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <Eye
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                      className="absolute bottom-3 right-3 text-gray-400 cursor-pointer"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                      className="absolute bottom-3 right-3 text-gray-400 cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="p-3 w-full rounded-xl text-white font-semibold bg-blue-500 mt-5 hover:bg-blue-400 cursor-pointer"
              >
                Sign Up
              </button>

              <div className="w-full flex items-center justify-center gap-4 mt-5">
                <div className="flex-grow h-px bg-gray-400"></div>
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-grow h-px bg-gray-400"></div>
              </div>

              <div className="w-full relative mt-5">
                <img
                  src={google}
                  alt="google"
                  className="w-8 h-8 absolute top-2 left-5 rounded-full"
                />
                <button className="p-3 w-full rounded-xl text-black bg-gray-200 hover:bg-gray-300 pl-16">
                  Sign up with Google
                </button>
              </div>
              <div className="w-full relative mt-3">
                <img
                  src={FbImg}
                  alt="facebook"
                  className="w-8 h-8 absolute top-2 left-5 rounded-full"
                />
                <button className="p-3 w-full rounded-xl text-black bg-gray-200 hover:bg-gray-300 pl-16">
                  Sign up with Facebook
                </button>
              </div>

              <div className="mt-6 text-center w-full">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setShowRegister(false)}
                >
                  Sign in
                </span>
              </div>
            </div>
          </form>
        ) : (
          <form method="post" onSubmit={handleLogin}>
            <div className="w-full flex flex-col items-start justify-center text-start">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                <p className="mt-2 font-medium">
                  Shape your story, one click at a time.
                  <br />
                  Sign in to continue your intern journey.
                </p>
              </div>
              <div className="flex flex-col mt-10 gap-5 w-full">
                <div className="flex flex-col gap-2 relative">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Jhon"
                    className="p-3 bg-[#f8f8f8] rounded-xl pr-14 outline-none border border-[#d7d7d7]"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <User
                    size={20}
                    className="absolute bottom-3 right-3 text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="p-3 bg-[#f8f8f8] rounded-xl pr-14 outline-none border border-[#d7d7d7]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <Eye
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                      className="absolute bottom-3 right-3 text-gray-400 cursor-pointer"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                      className="absolute bottom-3 right-3 text-gray-400 cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <div className="w-full flex justify-end mt-3">
                <p className="text-blue-500 text-sm cursor-pointer hover:underline">
                  Forgot password?
                </p>
              </div>

              <button className="p-3 w-full rounded-xl text-white font-semibold bg-blue-500 mt-5 hover:bg-blue-400 cursor-pointer">
                Sign In
              </button>

              <div className="w-full flex items-center justify-center gap-4 mt-5">
                <div className="flex-grow h-px bg-gray-400"></div>
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-grow h-px bg-gray-400"></div>
              </div>

              <div className="w-full relative mt-5">
                <img
                  src={google}
                  alt="google"
                  className="w-8 h-8 absolute top-2 left-5 rounded-full"
                />
                <button className="p-3 w-full rounded-xl text-black bg-gray-100 hover:bg-gray-200 pl-16">
                  Sign in with Google
                </button>
              </div>
              <div className="w-full relative mt-3">
                <img
                  src={FbImg}
                  alt="facebook"
                  className="w-8 h-8 absolute top-2 left-5 rounded-full"
                />
                <button className="p-3 w-full rounded-xl text-black bg-gray-100 hover:bg-gray-200 pl-16">
                  Sign in with Facebook
                </button>
              </div>

              <div className="mt-6 text-center w-full">
                Don’t have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setShowRegister(true)}
                >
                  Sign up
                </span>
              </div>
            </div>
          </form>
        )}
      </div>

      <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-200">
        <img
          src={HomeImg}
          alt="loginImage"
          loading="lazy"
          className="w-[80%] max-w-[550px]"
        />
      </div>
    </div>
  );
};

export default Loginpage;
