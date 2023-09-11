const { Post } = require('../models');

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.render('home', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getPostById: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.render('post', { post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  //creating, updating, and deleting posts.
};
