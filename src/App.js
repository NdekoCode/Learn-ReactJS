import {  Routes, Route } from "react-router-dom";
import "./index.css"
import { Home } from "./pages/Home";
import TabContent from "./pages/TabContent";
import {Login} from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Fade } from "./components/Fade";
import Blog from "./pages/Blog";

function App() {
  // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
  return (
    <>

<Navbar/>
    <Routes>
      <Route path="/" element={<Fade visible={true} animateEnter={true}><Home/></Fade>}/>
      <Route path="/about" element={<Fade visible={true} animateEnter={true}><TabContent/></Fade>}/>
      <Route path="/login" element={<Fade visible={true} animateEnter={true}><Login/></Fade>}/>
      <Route path="/blog" element={<Fade visible={true} animateEnter={true}><Blog/></Fade>}/>
      
    </Routes>
    </>
  );
}

export default App;
