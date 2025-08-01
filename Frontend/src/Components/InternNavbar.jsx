import { User } from "lucide-react";
import React from "react";

const InternNavbar = () => {
  return (
    <div className="p-5 flex flex-row justify-between items-center bg-blue-50 border-b-1 border-gray-400 shadow-md">
      <div>
        <h1 className="text-3xl font-semibold text-blue-400">Internshala</h1>
      </div>
      <div>
        <ul className="hidden md:flex flex-row gap-8 items-center">
          <li className="font-sans font-medium text-lg bg-blue-100 rounded-lg p-2 text-blue-500 shadow-sm">
            home
          </li>
          <li className="font-sans font-medium text-lg">tasks</li>
          <li className="font-sans font-medium text-lg">calender</li>
          <li className="font-sans font-medium text-lg">messages</li>
        </ul>
      </div>
      <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer shadow">
        <User size={20} />
      </div>
    </div>
  );
};

export default InternNavbar;
