import React, { useEffect, useState } from "react";
import InternNavbar from "../Components/InternNavbar";
import { Share, Trophy, User, Medal, Star, Crown } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Components/Loader";
const Internhome = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      setUsername(userName);
    }
  }, []);

  useEffect(() => {
    if (username) {
      getCode(username);
    }
  }, [username]);

  const getCode = async (name) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/code/getcode`,
        { username: name }
      );
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.error("Error fetching code:", e.response?.data || e.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(data);
  const handleClipboard = () => {
    toast.success("Referral code copied");
    navigator.clipboard.writeText(username + data.randomNumber);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <InternNavbar />
          <ToastContainer />
          <div className="px-4 flex flex-col w-full min-h-screen bg-blue-50">
            <div className="w-full mt-5 flex flex-col gap-3 bg-white p-5 rounded-2xl">
              <div className="flex flex-row gap-3 items-center">
                <div className="p-2 rounded-full bg-blue-300 cursor-pointer">
                  <User size={28} />
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Hello, {username}!
                </h1>
              </div>
              <span className="text-lg md:text-xl text-gray-600 font-medium">
                Welcome to your dashboard
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
              <div className="w-full md:w-[350px] flex flex-col gap-3 p-5 bg-white rounded-2xl">
                <div className="flex flex-row gap-3 items-center justify-between">
                  <h1 className="text-xl font-semibold">Your Referral Code</h1>
                  <Share size={20} />
                </div>
                <div className="flex flex-col gap-3 w-full text-center">
                  <h1 className="text-2xl font-semibold text-blue-500 p-5 bg-[#f8f8f8] rounded-xl border border-[#d7d7d7] break-words">
                    {username}
                    {data.randomNumber}
                  </h1>
                  <button
                    onClick={handleClipboard}
                    className="cursor-pointer p-3 w-full rounded-xl text-white font-semibold bg-blue-500 mt-2 hover:bg-blue-400"
                  >
                    Copy Code
                  </button>
                </div>
              </div>

              <div className="w-full md:w-[350px] flex flex-col gap-3 p-5 bg-white rounded-2xl">
                <div className="flex flex-row gap-3 items-center justify-between">
                  <h1 className="text-xl font-semibold">Total Donations</h1>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <h1 className="text-2xl font-semibold text-green-400 p-5 text-center rounded-xl">
                    ₹{data.number}
                  </h1>
                  <span className="text-center text-md text-gray-600 font-medium">
                    Raised this month
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 mt-5 flex flex-col w-full bg-white rounded-2xl">
              <h1 className="text-xl font-semibold">Rewards & Unlockables</h1>
              <span className="text-md text-gray-600 font-medium">
                Complete tasks and earn rewards
              </span>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center bg-green-100 border border-[#d7d7d7] p-6 rounded-xl">
                  <div className="w-[50px] p-3 rounded-full bg-green-500 flex items-center justify-center">
                    <Trophy size={28} color="#fff" />
                  </div>
                  <h1 className="font-semibold text-lg mt-5">First Task</h1>
                  <span className="text-md text-gray-600 font-medium text-center">
                    Complete your first task
                  </span>
                  <button className="px-6 mt-5 bg-green-400 text-white rounded-xl font-semibold">
                    Unlocked
                  </button>
                </div>

                <div className="flex flex-col items-center bg-blue-100 border border-[#d7d7d7] p-6 rounded-xl">
                  <div className="w-[50px] p-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <Medal size={28} color="#fff" />
                  </div>
                  <h1 className="font-semibold text-lg mt-5">Team Player</h1>
                  <span className="text-md text-gray-600 font-medium text-center">
                    Join 3 team activities
                  </span>
                  <button className="px-6 mt-5 bg-blue-400 text-white rounded-xl font-semibold">
                    Unlocked
                  </button>
                </div>

                <div className="flex flex-col items-center bg-gray-100 border border-[#d7d7d7] p-6 rounded-xl">
                  <div className="w-[50px] p-3 rounded-full bg-gray-500 flex items-center justify-center">
                    <Star size={28} color="#fff" />
                  </div>
                  <h1 className="font-semibold text-lg mt-5">Rising Star</h1>
                  <span className="text-md text-gray-600 font-medium text-center">
                    Complete three tasks
                  </span>
                  <button className="px-6 mt-5 bg-gray-400 text-white rounded-xl font-semibold">
                    Locked
                  </button>
                </div>

                <div className="flex flex-col items-center bg-gray-100 border border-[#d7d7d7] p-6 rounded-xl">
                  <div className="w-[50px] p-3 rounded-full bg-gray-500 flex items-center justify-center">
                    <Crown size={28} color="#fff" />
                  </div>
                  <h1 className="font-semibold text-lg mt-5">Champion</h1>
                  <span className="text-md text-gray-600 font-medium text-center">
                    Complete five tasks
                  </span>
                  <button className="px-6 mt-5 bg-gray-400 text-white rounded-xl font-semibold">
                    Locked
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Internhome;
