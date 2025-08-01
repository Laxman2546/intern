import React, { useEffect, useState } from "react";
import InternNavbar from "../Components/InternNavbar";
import { Share, Trophy, User, Medal, Star, Crown } from "lucide-react";

const Internhome = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      setUsername(userName);
    }
  }, []);
    
        
    
  return (
    <div>
      <InternNavbar />
      <div className="pl-5 flex flex-col w-full h-screen bg-blue-50">
        <div className="w-full  mt-5 flex flex-col gap-3 bg-white p-5  rounded-2xl">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-2 rounded-full bg-blue-300 cursor-pointer ">
              <User size={28} />
            </div>
            <h1 className="text-3xl font-semibold">Hello, {username}!</h1>
          </div>
          <span className="text-xl text-gray-600 font-medium">
            Welcome to your dashboard
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5">
            <div className="w-[350px] mt-5 flex flex-col gap-3 p-5 bg-white rounded-2xl">
              <div className="flex flex-row gap-3 items-center justify-between">
                <h1 className="text-xl font-semibold">Your Referral code</h1>
                <Share size={20} />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h1 className="text-2xl font-semibold text-blue-500 p-5 bg-[#f8f8f8] rounded-xl border-1 border-[#d7d7d7]">
                  Lakshman2025
                </h1>
                <button className="p-3 w-full rounded-xl text-white font-semibold bg-blue-500 mt-5 hover:bg-blue-400 cursor-pointer">
                  Copy Code
                </button>
              </div>
            </div>
            <div className="w-[350px] mt-5 flex flex-col gap-3 p-5 bg-white rounded-2xl">
              <div className="flex flex-row gap-3 items-center justify-between">
                <h1 className="text-xl font-semibold">Total Donations</h1>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h1 className="text-2xl font-semibold text-green-400 p-5  text-center rounded-xl ">
                  $12,000
                </h1>
                <span className="text-center text-md text-gray-600 font-medium">
                  Raised this month
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col  w-full bg-white rounded-2xl">
            <h1 className="text-xl font-semibold">Rewards & Unlockables</h1>
            <span className="text-md text-gray-600 font-medium">
              Complete tasks and earn rewards
            </span>
            <div className="p-8 flex flex-row gap-5">
              <div className="flex flex-col items-center bg-green-100 border-1 border-[#d7d7d7] p-8 ">
                <div className="max-w-[50px] p-3 rounded-full bg-green-500 flex items-center justify-center ">
                  <Trophy size={28} color="#fff" />
                </div>
                <h1 className="font-semibold text-lg mt-5">first Task</h1>
                <span className="text-md text-gray-600 font-medium">
                  complete your first task
                </span>
                <button className="pl-8 pr-8 mt-5 bg-green-400 text-white rounded-xl font-semibold">
                  unlocked
                </button>
              </div>
              <div className="flex flex-col items-center bg-blue-100 border-1 border-[#d7d7d7] p-8 ">
                <div className="max-w-[50px] p-3 rounded-full bg-blue-500 flex items-center justify-center ">
                  <Medal size={28} color="#fff" />
                </div>
                <h1 className="font-semibold text-lg mt-5"> Team Player</h1>
                <span className="text-md text-gray-600 font-medium">
                  join 3 team activities
                </span>
                <button className="pl-8 pr-8 mt-5 bg-blue-400 text-white rounded-xl font-semibold">
                  unlocked
                </button>
              </div>
              <div className="flex flex-col items-center bg-gray-100 border-1 border-[#d7d7d7] p-8 ">
                <div className="max-w-[50px] p-3 rounded-full bg-gray-500 flex items-center justify-center ">
                  <Star size={28} color="#fff" />
                </div>
                <h1 className="font-semibold text-lg mt-5">Rising Star</h1>
                <span className="text-md text-gray-600 font-medium">
                  complete three tasks
                </span>
                <button className="pl-8 pr-8 mt-5 bg-gray-400 text-white rounded-xl font-semibold">
                  locked
                </button>
              </div>
              <div className="flex flex-col items-center bg-gray-100 border-1 border-[#d7d7d7] p-8 ">
                <div className="max-w-[50px] p-3 rounded-full bg-gray-500 flex items-center justify-center ">
                  <Crown size={28} color="#fff" />
                </div>
                <h1 className="font-semibold text-lg mt-5">Champion</h1>
                <span className="text-md text-gray-600 font-medium">
                  complete five tasks
                </span>
                <button className="pl-8 pr-8 mt-5 bg-gray-400 text-white rounded-xl font-semibold">
                  locked
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internhome;
