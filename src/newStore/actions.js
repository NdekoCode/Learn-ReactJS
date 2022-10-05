import { DELETE_POST,ADD_POST } from "./rootReducer";

export const deletePost = (post)=>({
    type:DELETE_POST,
    payload:post
});
export const addPost = (post)=>({
    type:ADD_POST,
    payload:post,
})