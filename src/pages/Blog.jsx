import { connect } from "react-redux";
import AddPostStore from "../components/AddPost";
import BlogItemStore from "../components/BlogItem";
import { Fade } from "../components/Fade";

function Blog({ posts }) {
  // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
  return (
    <Fade visible={true}>
      <div className="container">
        <h1>Mon blog</h1>
        <p>{posts.length} Nombre d'articles</p>
        <AddPostStore />
        <BlogItemStore />
      </div>
    </Fade>
  );
}
const BlogStore = connect(({ posts }) => ({ posts }))(Blog);
export default BlogStore;
