import React from "react";
import { Fade } from "../../components/Fade";
// import { AutoCompter } from "./Compter";

import { useToggleCompterVisible } from "../hooks/Hooks";
// import { Encode } from "./Encode";
import { CompterReducer } from "./CompterReducer";
import { UnControlInput } from "./UnControlInput";
export function Home() {
  const [compterVisible, toggleCompter] = useToggleCompterVisible();
  return (
    <Fade>
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
        {compterVisible && <CompterReducer />}
      </div>
    </div></Fade>
  );
}
