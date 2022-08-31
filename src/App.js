import {  Routes, Route } from "react-router-dom";
import "./index.css"
import { Home } from "./pages/Home";
import TabContent from "./pages/TabContent";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";

function App() {
  // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
  return (
    <>

<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<TabContent/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
      <div className="container py-5">
      </div>
    </>
  );
}

export default App;
