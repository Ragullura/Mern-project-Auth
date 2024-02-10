import express from  'express';
/* import test from 'node:test'; */
import {test} from '../controllers/user.controller.js'

const router = express.Router();

// @route   GET api/posts
// @desc    Get all posts
router.get('/',test)
export default router;