
// Ces composant vont nous permettre de savoir l'Etat de notre composant.
/**
 * @description Notre composant enfant est visible, l’animation s’est déroulée et on le voit.
 * @constant
 * @type {Number}
 * @default 1
 */
export const VISIBLE = 1;

/**
 * @description On a masqué notre composant, il est invisible donc on ne le voit
 * @constant
 * @type {Number}
 * @default 2
 */
export const HIDDEN = 2;

/**
 * @description Élément rentre dans notre DOM, et on est entré de l’animer donc on veut un effet d’animation
 * @constant
 * @type {Number}
 * @default 3
 */
export const ENTERING = 3;

/**
 * @description Élément est entré de quitter notre DOM et on a un effet de transition ou d’animation
 * @constant
 * @type {Number}
 * @default 4
 */
export const LEAVING = 4;