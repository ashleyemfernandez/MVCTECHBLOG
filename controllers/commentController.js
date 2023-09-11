const { Comment } = require('../models');

module.exports = {
  createComment: async (req, res) => {
    const { postId, text } = req.body;
    try {
      const comment = await Comment.create({
        postId,
        text,
        // Add userId if you have user authentication
      });
      res.redirect(`/posts/${postId}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // comments (updating, deleting).
};
