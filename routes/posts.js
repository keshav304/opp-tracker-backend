import express from 'express';
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
import { requireSignin } from "../controllers/auth.js";
const postRoutes = express.Router();

// postRoutes.get('/post/',getPosts);
// postRoutes.post('/post/',createPost);
// postRoutes.patch('/post/:id',requireSignin,adminMiddleware,updatePost);
// postRoutes.delete('/post/:id',requireSignin,adminMiddleware,deletePost);
// postRoutes.patch('/post/:id/likepost',requireSignin,adminMiddleware,likePost);
postRoutes.get('/post/',getPosts);
postRoutes.post('/post/',createPost);
postRoutes.put('/post/:id',requireSignin,updatePost);
postRoutes.delete('/post/:id',requireSignin,deletePost);
postRoutes.put('/post/likepost/:id',requireSignin,likePost);

export default postRoutes;