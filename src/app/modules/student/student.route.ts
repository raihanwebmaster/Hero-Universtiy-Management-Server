import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlware/validateRequest';
import { StudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingletudent);
router.patch(
  '/:studentId',
  validateRequest(StudentValidationSchema.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
