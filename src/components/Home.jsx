import React from "react";
// import { AutoCompter } from "./Compter";

import { useToggleCompterVisible } from "../hooks/Hooks";
import { PostTable } from "./PostTable";
export function Home() {
  const [compterVisible, toggleCompter] = useToggleCompterVisible();
  return (
    <div className="container mt-5">
      <div>
        Afficher le compteur:
        <input
          type="checkbox"
          checked={compterVisible}
          onChange={toggleCompter}
        />
        <br />
        {compterVisible && <PostTable />}
      </div>
    </div>
  );
}
