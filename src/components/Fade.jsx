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
    const [showChildren,setShowVisible] = useState(visible);
    useEffect(()=>{
        if(visible){
            // SI l'element est visible alors il reste visible
            setShowVisible(true)
        }else {
            // Sinon on rend cet element invible après 350ms càd 0.35s
            setTimeout(()=>setShowVisible(false),350);

        }
    },[visible])
    // Si l'element n'est pas visible alors on ajoute au niveau de la classe la classe "out"
    if(!visible) {
        className+=" out";
    }
    return <div className={className}>{showChildren && children}</div>
}