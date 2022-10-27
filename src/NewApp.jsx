import React from "react";
import Goku from "./donkeyGeek/Goku";
import Vegeta from "./donkeyGeek/Vegeta";

const NewApp = () => {
  return (
    <div className="text-center">
      <h1>Goku vs Vegeta</h1>
      <div className="flex">
        <Vegeta name="Vegeta"></Vegeta>
        <Goku name="Goku"></Goku>
      </div>
    </div>
  );
};

export default NewApp;
