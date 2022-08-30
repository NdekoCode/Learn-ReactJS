import { useCallback, useState } from "react";
import { Fade } from "./Fade";
import { SquareSwitchAnim } from "./SquareSwitchAnim";

export const MakeAnimation = () => {
  const [open, setOpen] = useState(true);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  return (
    <div className="">
      <button onClick={toggle}>Afficher/Masquer l'element</button>
      {/* Ce composant sera afficher ou masquer suivant un Etat particulier */}
      
      <Fade visible={open}>
        <SquareSwitchAnim text={"Square BUm"}/>
      </Fade>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quia et incidunt odit laboriosam earum, corrupti, optio labore inventore ipsum praesentium fugit voluptate. Consectetur unde facere sequi at omnis sed?
    </div>
  );
};
