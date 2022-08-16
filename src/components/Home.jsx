import React, { useRef } from "react";
// import { AutoCompter } from "./Compter";

import { useToggleCompterVisible } from "../hooks/Hooks";
import { Encode } from "./Encode";
import { UnControlInput } from "./UnControlInput";
export function Home() {
  const [compterVisible, toggleCompter] = useToggleCompterVisible();
  return (
    <div className="container mt-5">
      <div className="mt-5 mb-3">
        <UnControlInput />
      </div>
      <div>
        Afficher le compteur:
        <input
          type="checkbox"
          checked={compterVisible}
          onChange={toggleCompter}
        />
        <br />
        {compterVisible && <Encode />}
      </div>
    </div>
  );
}
