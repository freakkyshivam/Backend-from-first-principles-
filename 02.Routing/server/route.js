import express from 'express';
import { fetchAllBooks, fetchAllUsers, fetchBookById, fetchUserById, fetchUserPostById, searchData } from './controller.js';

const router = express.Router();

// static route
router.get('/users', fetchAllUsers);
router.get('/books', fetchAllBooks)

// dynamic routes
router.get('/users/:id', fetchUserById)
router.get('/books/:id', fetchBookById)

// Nested route
router.get('/users/:userId/posts/:postId',fetchUserPostById)

//Query Params
router.get('/search', searchData)

export default router