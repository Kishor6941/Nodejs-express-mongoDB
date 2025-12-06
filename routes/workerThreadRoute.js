import express from 'express';
const workerRouter = express.Router();
import { workerDataTest, workerThreadTest } from '../controllers/workerController.js';
workerRouter.get('/non-bloacking', workerDataTest); 
workerRouter.get('/blocking', workerThreadTest);
export default workerRouter;