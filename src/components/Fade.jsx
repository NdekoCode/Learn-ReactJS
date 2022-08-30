import { useEffect, useState } from "react";

/**
 * @description est un composant qui va permettre à ses enfant de se cacher ou de se rendre visible avec un effet d'opacité progressif
 * @param {Object} props
 * @param {Boolean} [props.visible] Va permettre de dire si l'element enfant dans doit etre visible ou invisible
 * @returns 
 */
export const Fade = ({visible,children})=>{

// On va activer ou desactiver cette clase "out" si l'on veut une animation
    let className ="fade__class";
    //On va créer un Etat qui va permettre de dire si oui ou non on doit afficher l'enfant
    const [showChildren,setShowVisible] = useState(visible);
    // Quand le composant est monté on verifie si on doit afficher l'enfant ou le cacher
    useEffect(()=>{
        if(visible){
            // SI l'element est visible alors il reste visible dans le DOM
            setShowVisible(true)
        }else {
            // Sinon on rend cet element invible après 350ms càd 0.35s
            const timer = setTimeout(()=>setShowVisible(false),350);
            return ()=>{
                clearTimeout(timer);
            }

        }
    },[visible])// On verifie la valeur de visible à chaque fois
    // Si l'element n'est pas visible alors on ajoute au niveau de la classe la classe "out"
    if(!visible) {
        className+=" out";
    }
    return <div className={className}>{showChildren && children}</div>
}