const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route to display all blog posts
router.get('/', postController.getAllPosts);

// Route to display a single blog post by ID
router.get('/:id', postController.getPostById);

// Add more routes for creating, updating, and deleting posts as needed

module.exports = router;
