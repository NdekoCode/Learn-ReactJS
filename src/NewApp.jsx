import React, { useState } from "react";
import Vegeta from "./donkeyGeek/Vegeta";
import Goku from "./donkeyGeek/Goku";

const NewApp = () => {
  const [life, setLife] = useState({
    vegeta: 100,
    goku: 100,
  });
  const handleLife = (name, hits, power) => {
    if (hits > 0) {
      if (name === "Goku") {
        if (life.vegeta > 0 && life.goku > 0) {
          setLife((life) => ({ ...life, vegeta: life.vegeta - power }));
        }
      } else {
        if (life.goku > 0 && life.vegeta > 0) {
          setLife((life) => ({ ...life, goku: life.goku - power }));
        }
      }
    }
  };
  return (
    <div className="text-center">
      <h1>Goku vs Vegeta</h1>
      <div className="flex">
        <Vegeta name="vegeta" life={life.vegeta} hitLife={handleLife} />
        <Goku name="Goku" life={life.goku} hitLife={handleLife} />
      </div>
    </div>
  );
};

export default NewApp;
