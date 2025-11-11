import express from 'express'
import { submitForm } from '../controller/userController.js';

const router = express.Router()

router.post('/user', submitForm);
export default router;