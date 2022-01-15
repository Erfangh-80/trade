import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/getUserList', userController.UserList)
router.get('/getUserList/:id', userController.FindUser)
router.put('/updateUser/:id', () => userController.EditUser);
router.delete('/deleteUser/:id', () => userController.DeleteUser);

// lgoin
router.post('/register',() => userController.CreateUser);
router.post('/login',() => userController.Login);
export default router;