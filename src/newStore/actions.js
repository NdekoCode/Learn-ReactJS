import { DELETE_POST } from "./rootReducer";

export const deletePost = (post)=>({
    type:DELETE_POST,
    payload:post
})