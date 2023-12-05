import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlware/validateRequest';
import { StudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:id', StudentControllers.getSingletudent);
router.patch(
  '/:id',
  validateRequest(StudentValidationSchema.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes = router;
