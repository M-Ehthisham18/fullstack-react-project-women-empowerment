import express from 'express';
import protectRoute from "../middlewares/auth.middleware.js"
import { getAllPosts, getPost,createPost, deletePost ,postDetails } from "../controllers/post.controller.js"
const router = express.Router();

router.get('/posts',getAllPosts);
router.get('/post-details/:userId',postDetails);

router.get('/post/:id',getPost);
router.post('/post',protectRoute ,createPost);
router.post('/delete-post',protectRoute, deletePost)

export default router;