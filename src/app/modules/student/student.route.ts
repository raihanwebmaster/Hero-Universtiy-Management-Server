import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlware/validateRequest';
import { StudentValidationSchema } from './student.validation';
import auth from '../../middlware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  StudentControllers.getSingletudent,
);
router.patch(
  '/:id',
  validateRequest(StudentValidationSchema.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:id', auth(USER_ROLE.admin), StudentControllers.deleteStudent);

export const StudentRoutes = router;
