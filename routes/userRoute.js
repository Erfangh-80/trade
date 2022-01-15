import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/createUser',() => userController.CreateUser);

export default router;