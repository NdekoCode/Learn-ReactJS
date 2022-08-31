import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return <nav className="container my-5">
    <ul>
        <li><NavLink to="/">Acceuil</NavLink></li>
        <li><NavLink to="/about">A props</NavLink></li>
    </ul>
    </nav>;
  };
  