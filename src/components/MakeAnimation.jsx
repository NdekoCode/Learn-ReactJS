import { useCallback, useState } from "react";
import { FadeWithStyle } from "./FadeWithStyle";
import { SquareSwitchAnim } from "./SquareSwitchAnim";

export const MakeAnimation = () => {
  const [open, setOpen] = useState(true);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  return (
    <div className="">
      <button onClick={toggle}>Afficher/Masquer l'element</button>
      {/* Ce composant sera afficher ou masquer suivant un Etat particulier */}
      
      <FadeWithStyle visible={open}>
        <SquareSwitchAnim text={"Square BUm"}/>
      </FadeWithStyle>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quia et incidunt odit laboriosam earum, corrupti, optio labore inventore ipsum praesentium fugit voluptate. Consectetur unde facere sequi at omnis sed?
    </div>
  );
};
