const blogCommentRouter = require("express").Router();
const Blog = require("../models/blog");
const Comment = require("../models/comment");

blogCommentRouter.post("/:id/comments", async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id);
    const { data } = request.body;
    const comment = new Comment({ data });
    const savedComment = await comment.save();
    blog.comments = blog.comments.concat(savedComment._id);
    await blog.save();
    response.status(201).json(savedComment);
  } catch (err) {
    next(err);
  }
});

module.exports = blogCommentRouter;
