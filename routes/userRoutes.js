import express from 'express'
import { submitForm ,getAllUsers , getUserById,deleteUser , updateUser} from '../controller/userController.js';

const router = express.Router()

router.post('/user', submitForm);
router.get("/users", getAllUsers); 
router.get("/users/:id", getUserById);  
router.put("/users/:id" , updateUser)
router.delete("/users/:id", deleteUser); 
export default router;