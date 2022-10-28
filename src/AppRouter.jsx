import React from "react";
import Docs from "./components/Docs";
import Tutoriels from "./components/Tutoriels";
import Community from "./components/Community";
import Navbar from "./donkeyGeek/Navbar";

const AppRouter = () => {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-2xl font-bold text-gray-700">Goku vs Vegeta</h1>
      <div className="flex flex-col">
        <Docs />
        <Tutoriels />
        <Community />
      </div>
    </div>
  );
};

export default AppRouter;
