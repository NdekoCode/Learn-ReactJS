/**
 * @description est un composant qui va permettre à ses enfant de se cacher ou de se rendre visible avec un effet d'opacité progressif
 * @param {Object} props
 * @param {Boolean} [props.visible] Va permettre de dire si l'element enfant dans doit etre visible ou invisible
 * @returns 
 */
export const Fade = ({visible,children})=>{

// On va activer ou desactiver cette clase "out" si l'on veut une animation
    let className ="fade__class";
    // Si l'element n'est pas visible alors on ajoute au niveau de la classe la classe "out"
    if(!visible) {
        className+=" out";
    }
    return <div className={className}>{children}</div>
}