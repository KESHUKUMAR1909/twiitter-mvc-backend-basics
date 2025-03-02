import express from 'express';
import v1Router from './v1/v1Routes.js';
import v2Router from './v2/v2Router.js';

const apiRouter = express.Router();  // Correct variable name

apiRouter.use('/v1', v1Router);  // Use apiRouter instead of router
apiRouter.use('/v2',v2Router);  // Use apiRouter instead of router

export default apiRouter;
