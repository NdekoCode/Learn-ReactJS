import {  Routes, Route } from "react-router-dom";
import "./index.css"
import { Home } from "./pages/Home";
import TabContent from "./pages/TabContent";
import {Login} from "./pages/Login";
import { Navbar } from "./components/Navbar";
import BlogStore from "./pages/Blog";
import store from "./newStore";
import { Provider } from "react-redux";
// import PostStore from "./components/Post";
import Post from "./components/Post";

function App() {
  // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
  return (
  
 <Provider store={store}>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<TabContent/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/blog" element={<BlogStore/>}/>
      <Route path="/post/:id" element={<Post/>}/>
      
    </Routes>
  </Provider>
  );
}

export default App;
