import React from "react";
import Docs from "./components/Docs";
import Tutoriels from "./components/Tutoriels";
import Community from "./components/Community";
import Navbar from "./donkeyGeek/Navbar";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="text-center">
      <Navbar />

      <h1 className="text-2xl font-bold text-gray-700">Goku vs Vegeta</h1>
      <div className="flex flex-col">
        <Routes>
          <Route path="/" element={<Docs />} />
          <Route path="/tutoriel" element={<Tutoriels />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
