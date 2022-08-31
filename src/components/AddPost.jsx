import React, { useState } from 'react';

const AddPost = ({addPost}) => {
    const [post,setPost] = useState({
        title:"",
        body:""
    });
    return (

        <div>
            <form onClick={addPost}>
                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <input type="text" id="title" name="title" value={post.title} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <textarea name="body" id="body" cols="30" rows="5" className='form-control'></textarea>
                </div>
            </form>
        </div>
    );
};

export default AddPost;