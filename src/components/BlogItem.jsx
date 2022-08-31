import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../newStore/actions';
import { Fade } from './Fade';

const BlogItem = ({posts,onDelete}) => {
    if(posts.length){
        
    return (
        <ul>
            {posts.map((item,index)=>(<Fade  key={index}  visible={true}>
                <li className="d-flex"><div className='m-1 mb-3'><h3><Link to={`/post/${item.id}`}>{item.title}</Link></h3> <p>{item.body}</p> </div><button className='btn btn-danger p-1' onClick={()=>onDelete(item)}>X</button></li>
            </Fade>))}
        </ul>
    );
    }
    return <p>Aucun article pour le moment</p>
};
const BlogItemStore = connect(({posts})=>({posts}),
(dispatch)=>({
    onDelete:(value)=>dispatch(deletePost(value))
}))(BlogItem)
export default BlogItemStore;