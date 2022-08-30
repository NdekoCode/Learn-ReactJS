import { useEffect, useState } from "react";
import { ENTERING, HIDDEN, LEAVING, VISIBLE } from "./stepAnimation";

export const useStepAnimation = ({ visible, duration = 350 }) => {
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    useEffect(() => {
      if (!visible) {
        setState(LEAVING);
      } else {
        setState((s) => (s === HIDDEN ? ENTERING : VISIBLE)); 
      }
    }, [visible]);
    useEffect(() => {
      if (state === LEAVING) {
        const timer = window.setTimeout(() => {
          setState(HIDDEN);
          // On nettoie notre tiler
          return () => {
            window.clearInterval(timer);
          };
        }, duration);
      } else if (state === ENTERING) {
        // eslint-disable-next-line no-unused-expressions
        document.body.offsetHeight; // Pour remedier à ce problème il faut utiliser la logique avec les animations CSS @kayframes au lier de passer  par les transition
        setState(VISIBLE); // Du coup il rétirera la classe Out et on aura notre Effet d'opacité
      }
    }, [duration, state]);
  return [state,setState];
};