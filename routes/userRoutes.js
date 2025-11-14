import express from 'express'
import { submitForm ,getAllUsers , getUserById,deleteUser , updateUser} from '../controller/userController.js';
import { verifyToken } from '../middleware/auth.js';
import { globalErrorHandle } from '../middleware/error.js';

const router = express.Router()

router.post('/user', submitForm);
router.get("/users", getAllUsers); 
router.get("/users/:id",verifyToken, getUserById);  
router.put("/users/:id" , updateUser)
router.delete("/users/:id", deleteUser); 
export default router;