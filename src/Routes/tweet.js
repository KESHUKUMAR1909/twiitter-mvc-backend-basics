import express from 'express';
import { getTweets, getTweetsById , createTweet , deleteTweet  ,updateTweet } from '../Controllers/tweetController.js';  // Add .js extension
import { tweetZodSchema } from '../Validators/tweetZodSchema.js';
import {validate} from '../Validators/zodValidators.js';
import { s3Uploader } from '../Config/multerConfig.js';
import { getTweetByIdManualValidator } from '../Validators/tweetManualValidator.js';



const tweetRouter = express.Router(); // Create a router object

tweetRouter.get('/', getTweets);
tweetRouter.get('/:id',getTweetByIdManualValidator, getTweetsById);
tweetRouter.delete('/:id',getTweetByIdManualValidator ,deleteTweet);
tweetRouter.put('/:id',getTweetByIdManualValidator ,updateTweet);
tweetRouter.post('/',s3Uploader.single('tweetImage') , validate(tweetZodSchema),createTweet)
export default tweetRouter;
