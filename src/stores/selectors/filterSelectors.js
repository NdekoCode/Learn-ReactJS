// Sera un fichier qui va exporter des fonctions selector pour notre Etat filter: dans le store
// Va contenir les selecteurs de notre filter, ça sera simplement des fonctions
/**
 * @description Une fonction qui prendra en paramètre l'Etat et nous retournera ce que l'on souhaite obtenir dans cet Etat,  il va parcourir notre store et extraire ce qui a comme clé "filter" dans notre cas il va extraire "filter" dans l'Etat et nous les envoyer, filter permet de filtrer les données de nos todos
 * @author NdekoCode
 * @export
 * @param {Object} filter le contenus du filtre de notre todos que l'on extrait dans notre store
 * @return {Object}
 */
export const filterSelector = ({filter})=>(filter); 