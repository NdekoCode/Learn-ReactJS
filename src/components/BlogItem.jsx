import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../newStore/actions';

const BlogItem = ({posts,onDelete}) => {
    return (
        <ul>
            {posts.map(item=>(<li key={item.id} className="d-flex"><div className='m-1 mb-3'>{item.title} <p>{item.body}</p> </div><button className='btn btn-danger p-1' onClick={()=>onDelete(item)}>X</button></li>))}
        </ul>
    );
};
const BlogItemStore = connect((state)=>({posts:state.posts}),
(dispatch)=>({
    onDelete:(value)=>dispatch(deletePost(value))
}))(BlogItem)
export default BlogItemStore;