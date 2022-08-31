import { Provider } from "react-redux";
import AddPostStore from "../components/AddPost";
import BlogItemStore from "../components/BlogItem";
import store from "../newStore";

function Blog() {
  // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
  return <Provider store={store}>
    <div className="container">
    <h1>Mon blog</h1>
    <AddPostStore/>
        <BlogItemStore/>
    </div>
  </Provider>;
}

export default Blog;
