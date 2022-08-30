import { useCallback, useState } from "react";
import { Fade } from "./Fade";
import { FadeWithStyle } from "./FadeWithStyle";
import { SquareSwitchAnim } from "./SquareSwitchAnim";

export const MakeAnimation = () => {
  const [open, setOpen] = useState(true);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  const myVaribles = [0,1,2,3,4,5].reverse();
  console.log(myVaribles);
  return (
    <div className="">
      <button onClick={toggle}>Afficher/Masquer l'element</button>
      {/* Ce composant sera afficher ou masquer suivant un Etat particulier */}
      
      <Fade visible={open}  classEnter="fade_x" classEnd="fade_x out">
        <SquareSwitchAnim text={"Square BUm"}/>
      </Fade>


      <Fade visible={open} duration={3}  classEnter="fade_x" classEnd="fade_x out">
        <SquareSwitchAnim text={"Square BUm"}/>
      </Fade>

      <FadeWithStyle visible={open}  duration={100} animateEnter={true} >
        <SquareSwitchAnim text={"Square BUm"}/>
      </FadeWithStyle>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quia et incidunt odit laboriosam earum, corrupti, optio labore inventore ipsum praesentium fugit voluptate. Consectetur unde facere sequi at omnis sed?
      </p>
    </div>
  );
};
