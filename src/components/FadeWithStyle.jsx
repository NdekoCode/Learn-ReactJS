import { useRef } from "react";
import { useEffect, useState } from "react";
// Ces composant vont nous permettre de savoir l'Etat de notre composant.
/**
 * @description Notre composant enfant est visible, l’animation s’est déroulée et on le voit.
 * @constant
 * @type {Number}
 * @default 1
 */
const VISIBLE = 1;

/**
 * @description On a masqué notre composant, il est invisible donc on ne le voit
 * @constant
 * @type {Number}
 * @default 2
 */
const HIDDEN = 2;

/**
 * @description Élément rentre dans notre DOM, et on est entré de l’animer donc on veut un effet d’animation
 * @constant
 * @type {Number}
 * @default 3
 */
const ENTERING = 3;

/**
 * @description Élément est entré de quitter notre DOM et on a un effet de transition ou d’animation
 * @constant
 * @type {Number}
 * @default 4
 */
const LEAVING = 4;
/**
 * @description Composant qui permet d'animer ses enfant avec un Effet d'apparition et de disparition
 *
 * @component FadeWithStyle
 * @param {Boolean} [props.visible] Qui permet d'afficher ou de ne pas afficher les composant ous les enfants
 * @param {ReactElement} [props.children] les composant ous les enfantsà Afficher
 * @param {ReactElement} [props.duration] La durée d'animation
 * @returns {JSX}
 */
export const FadeWithStyle = ({ visible, children, duration = 350,animateEnter=false }) => {
    const childRef = useRef(children); // Pour de raison de performance.
    if(visible) {
        childRef.current = children;
    }
  // Il faut maintenant connaitre dans ces 4 ETAT ci-haut dans quel Etat se situe notre composant et suivant la propriété visible notre composant peut se trouver dans deux ETATS qui sont: HIDDEN quand "visible" vaut 'false' et VISIBLE quand "visible" vaut 'true'
  // Quand le composant est monté on verifie si on doit afficher l'enfant ou le cacher
  // Pour savoir son Etat de départ on créer un Etat.
  // si on a une animation en Entrer  on ne va pas lui mettre d'abord VISIBLE mais plutut ENTERING
  const [state, setState] = useState(visible ? (animateEnter ? ENTERING: VISIBLE) : HIDDEN);
  // Maintenant on base notre classe sur la valeur de ce 4 constante:
  // Quand l'element est visible(VISIBLE) il aura juste la classe "fade__class", quand l'element est masquer(HIDDEN) ou lorsqu'il est entrer de commencer une animation(ENTERING) ou lorsqu'il est entrer de quitter(LEAVING) il aura la classe "fade_class out"

  useEffect(() => {
    // Si l'element n'est pas visible alors il faut modifier l'etat et commencer à quitter le dom
    if (!visible) {
      // On commence une animation de masquage et on lui dit de commencer à quitter le DOM
      setState(LEAVING);
    } else {
      // Par contre si l'Element devient visible on doit lui dire de commencer à Entrer dans le DOM, Si l'element est dans l'Etat visible il ne faut pas que tu sors du DOM mais que tu reste dans l'ETAT visible
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE)); // Il ne doit passe de l'Etat ENTERING que si il venait de l'Etat HIDDEN
    }
    // si l'element etait entrer de quitter(LEAVING) on va lui demander de revenir à VISIBLE
  }, [visible]);
  // On va maintenant dire que si l'Element est entrer de quitter (LEAVING) alors au bout d'une certaine durer il va falloir masquer l'Element
  // Et pour cela c'est plus simple d'observer l'Etat de notre composant et de réagir en fonction de cet Etat là, donc pour cela il faut faire un nouveau useEffect basé sur l'observation de notre "state".
  useEffect(() => {
    if (state === LEAVING) {
      // ALors on lance notre petit timer qui va permettre de faire passer notre Etat de LEAVING à HIDDEN et cela après 0.3 séconde
      const timer = window.setTimeout(() => {
        setState(HIDDEN);
        // On nettoie notre tiler
        return () => {
          window.clearInterval(timer);
        };
      }, duration);
      // Sinon si notre element est entrer de venir ou d'arriver dans le DOM alors rend le visible
    } else if (state === ENTERING) {
      // On demandre au navigateur de peindre les changement, pour cela on fait un traitement pour que le navigateur travaile.
      // eslint-disable-next-line no-unused-expressions
      document.body.offsetHeight; // Pour remedier à ce problème il faut utiliser la logique avec les animations CSS @kayframes au lier de passer  par les transition
      setState(VISIBLE); // Du coup il rétirera la classe Out et on aura notre Effet d'opacité
    }
  }, [duration, state]);
  
  // Alors si notre Etat est dans l'etape HIDDEN alors on supprime le tout du DOM
  if (state === HIDDEN) {
    return null;
  }
  // On utilise plus les classe CSS pour faire notre animation mais juste du style
  let style = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity transform"

  }
  if(state!==VISIBLE) {
    style.opacity = 0;
    style.transform = "translateY(-5px)";
  }

  
  return <div style={style}>{childRef.current}</div>;
};
