import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./Pages/Loginpage.jsx";
import Internhome from "./Pages/Internhome.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/internhome" element={<Internhome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
