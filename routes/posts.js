import express from 'express';
import {getPosts,createPost,updatePost,deletePost,likePost, unlikePost} from '../controllers/posts.js';
import { requireSignin } from "../controllers/auth.js";
const postRoutes = express.Router();


postRoutes.get('/post/',getPosts);
postRoutes.post('/post/',createPost);
postRoutes.put('/post/:id',requireSignin,updatePost);
postRoutes.delete('/post/:id',requireSignin,deletePost);
postRoutes.put('/post/likepost/:id',requireSignin,likePost);
postRoutes.put('/post/unlikepost/:id',requireSignin,unlikePost);
export default postRoutes;
