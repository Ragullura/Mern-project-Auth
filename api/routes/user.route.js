import express from  'express';
import {test, updateUser} from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// @route   GET api/posts
// @desc    Get all posts
router.get("/",test);
router.post('/update:id', verifyToken, updateUser)


export default router;