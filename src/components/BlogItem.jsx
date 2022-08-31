import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../newStore/actions';

const BlogItem = ({posts,onDelete}) => {
    return (
        <ul>
            {posts.map(item=>(<li key={item.id}>{item.title} <p onClick={()=>onDelete(item)}>X</p></li>))}
        </ul>
    );
};
const BlogItemStore = connect((state)=>({posts:state.posts}),
(dispatch)=>({
    onDelete:(value)=>dispatch(deletePost(value))
}))(BlogItem)
export default BlogItemStore;