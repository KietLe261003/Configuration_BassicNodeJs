import express from 'express'
import { body, validationResult } from 'express-validator';
const router = express.Router();
import { userController } from '../controller/index.js';
router.get('/',(req,res)=>{
    res.send("get usser")
})
router.post('/login',
    body('email').isEmail(),
    body('password').optional().isLength({ min: 6 }),
    userController.login
)
router.post('/register',userController.register)

export default router;