import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Fade } from "./Fade";

const Post = ({post}) => {
  return (
    <Fade visible={true}>
      <div className="container">
        <h2 className="m-1 mb-3">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Fade>
  );
};
export const PostStore = connect(
  (state) => {
    const params = useParams();
    let id = parseInt(params.id);
    

    return{ post: state.posts.find(post=>post.id===id)};
  }
)(Post);
export default PostStore;
