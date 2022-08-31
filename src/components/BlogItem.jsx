import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../newStore/actions';
import { Fade } from './Fade';

const BlogItem = ({posts,onDelete}) => {
    return (
        <ul>
            {posts.map((item,index)=>(<Fade  key={index}  visible={true}>
                <li className="d-flex"><div className='m-1 mb-3'>{item.title} <p>{item.body}</p> </div><button className='btn btn-danger p-1' onClick={()=>onDelete(item)}>X</button></li>
            </Fade>))}
        </ul>
    );
};
const BlogItemStore = connect(({posts})=>({posts}),
(dispatch)=>({
    onDelete:(value)=>dispatch(deletePost(value))
}))(BlogItem)
export default BlogItemStore;