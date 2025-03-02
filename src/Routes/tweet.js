import express from 'express';
import { getTweets, getTweetsById , createTweet } from '../Controllers/tweetController.js';  // Add .js extension
import { tweetZodSchema } from '../Validators/tweetZodSchema.js';
import {validate} from '../Validators/zodValidators.js';

const tweetRouter = express.Router(); // Create a router object

tweetRouter.get('/', getTweets);
tweetRouter.get('/:id', getTweetsById);
tweetRouter.post('/',validate(tweetZodSchema),createTweet)
export default tweetRouter;
