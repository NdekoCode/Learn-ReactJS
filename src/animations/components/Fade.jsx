import { useEffect, useState } from "react";
import { ENTERING, HIDDEN, LEAVING, VISIBLE } from "../stepAnimation";

import { FadeStartStyle } from "../styles";
import { useRef } from "react";

export function Fade({ visible, children, duration = 350 }){

  // Il faut maintenant connaitre dans ces 4 ETAT ci-haut dans quel Etat se situe notre composant et suivant la propriété visible notre composant peut se trouver dans deux ETATS qui sont: HIDDEN quand "visible" vaut 'false' et VISIBLE quand "visible" vaut 'true'
  // Pour savoir son Etat de départ on créer un Etat.
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    // Quand le composant est monté on verifie si on doit afficher l'enfant ou le cacher
  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE)); 
    }
  }, [visible]);
//   / Maintenant on base notre classe sur la valeur de ce 4 constante:
  // Quand l'element est visible(VISIBLE) il aura juste la classe "fade__class", quand l'element est masquer(HIDDEN) ou lorsqu'il est entrer de commencer une animation(ENTERING) ou lorsqu'il est entrer de quitter(LEAVING) il aura la classe "fade_class out"

  // On va activer ou desactiver cette clase "out" si l'on veut une animation
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
    const childRef = useRef(children); // Pour de raison de performance.
    if(visible) {
        childRef.current = children;
    }
  // On utilise plus les classe CSS pour faire notre animation mais juste du style
  let style = FadeStartStyle(duration);

  // Alors si notre Etat est dans l'etape HIDDEN alors on supprime le tout du DOM
  if (state === HIDDEN) {
    return null;
  }
  if(state!==VISIBLE) {
    style.opacity = 0;
    style.transform = "translateY(-5px)";
  }
  
  return <div style={style}>{childRef.current}</div>;
}