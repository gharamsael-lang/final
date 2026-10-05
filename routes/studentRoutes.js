import express from 'express';

import {getStudents , createStudent, deleteStudent, updateStudent} from '../controllers/studentController.js'

const router = express.Router();

//localhost:5000;
router.route('/').get(getStudents).post(createStudent);
router.route('/:id').delete(deleteStudent).put(updateStudent);

export default router;

