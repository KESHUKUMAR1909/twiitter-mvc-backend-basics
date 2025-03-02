import express from 'express';
import tweetRouter from '../tweet.js';  // Add .js extension
import commentRouter from '../Comment.js';  // Add .js extension

const v1Router = express.Router();

v1Router.use("/tweets", tweetRouter);
v1Router.use("/comments", commentRouter);

export default v1Router;
