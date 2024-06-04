import express from 'express';
const router = express.Router();
import { query, validationResult } from 'express-validator';
import { studentController } from '../controller/index.js';
router.get('/',studentController.home)
router.get('/:id',studentController.getStudent)
router.post('/insert',studentController.insertStudent)
export default router;