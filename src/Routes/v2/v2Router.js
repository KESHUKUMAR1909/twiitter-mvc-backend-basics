import express from 'express';
import tweetRouter from '../tweet.js';
import commentRouter from '../Comment.js';
const v2Router = express.Router();
v2Router.use("/tweets" , tweetRouter)
v2Router.use("/comments" , commentRouter)
export default v2Router;