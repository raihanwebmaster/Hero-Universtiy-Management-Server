import express from 'express';
import { UserController } from './user.controller';
import { StudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlware/validateRequest';
import { createFacultyValidationSchema } from '../faculty/faculty.validation';
import { createAdminValidationSchema } from '../admin/admin.validation';
import auth from '../../middlware/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin), 
  validateRequest(StudentValidationSchema.createValidationSchema),
  UserController.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.admin), 
  validateRequest(createFacultyValidationSchema),
  UserController.createFaculty,
);

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin), 
  validateRequest(createAdminValidationSchema),
  UserController.createAdmin,
);

export const UserRoutes = router;
