import { useState,useEffect } from "react";
import "../assets/css/square.css";
export const SquareSwitchAnim = ({text})=>{
    const  [count, setCount] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(()=>setCount(sc=>sc+1),1000);
        return () => {
             window.clearInterval(timer);
        };
    }, [count]); 
    return <div className="square">{text} {count}</div>
}