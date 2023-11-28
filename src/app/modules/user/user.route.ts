import express from 'express';
import { UserController } from './user.controller';
import { StudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlware/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidationSchema.createValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
