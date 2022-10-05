import React, { useState } from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../newStore/actions';

const AddPost = ({addPost}) => {
    const [post,setPost] = useState({
        title:"",
        body:""
    });

    const change = useCallback((evt)=>{
        const name= evt.target.name;
        const value = evt.target.value;
        setPost(p=>({...p,[name]:value}));
    },[setPost]);
    const submit = (evt)=>{
        evt.preventDefault();
        addPost(post)
        setPost({
            title:"",
            body:""
        });
    }
    return (

        <div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <input className='form-control' type="text" id="title" name="title" onChange={change} value={post.title} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <textarea name="body" id="body" value={post.body} onChange={change} cols="30" rows="5" className='form-control'></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Add post</button>
            </form>
        </div>
    );
};
const AddPostStore = connect(null, (dispatch)=>({
    addPost:(value)=>dispatch(addPost(value))
}))(AddPost)
export default AddPostStore;