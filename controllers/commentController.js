const { Comment } = require('../models');

module.exports = {
  createComment: async (req, res) => {
    const { postId, text } = req.body;
    try {
      const comment = await Comment.create({
        postId,
        text,
        
      });
      res.redirect(`/posts/${postId}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // comments function (updating, deleting).
};
