import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Fade } from "./Fade";

const Post = ({ post }) => {
  return (
    <Fade visible={true}>
      <div className="container">
        {post ? (
          <div>
            <h2 className="m-1 mb-3">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>L'article n'existe pas</p>
        )}
      </div>
    </Fade>
  );
};
export const PostStore = connect(({ posts }) => {
  // On recupère les paramètres dans l'URL
  const params = useParams();
  // On transforme l'id dans l'url en entier
  let id = parseInt(params.id);

  // On récupère le post qui correpond parmis les posts qu'on a dans le state
  return { post: posts.find((post) => post.id === id) };
})(Post);
export default PostStore;
