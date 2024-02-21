import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { CourseFacultiesValidations } from './courseFaculties.validation';
import { CourseFacultiesControllers } from './courseFaculties.controller';
import auth from '../../middlware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();
router.put(
    '/:courseId/assign-faculties',
    auth(USER_ROLE.superAdmin, USER_ROLE.admin),
    validateRequest(CourseFacultiesValidations.facultiesWithCourseValidationSchema),
    CourseFacultiesControllers.assignFacultiesWithCourse,
  );

  router.get(
    '/:courseId/get-faculties',
    auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
    CourseFacultiesControllers.getFacultiesWithCourse,
  );


  router.delete(
    '/:courseId/remove-faculties',
    auth(USER_ROLE.superAdmin, USER_ROLE.admin),
    validateRequest(CourseFacultiesValidations.facultiesWithCourseValidationSchema),
    CourseFacultiesControllers.removeFacultiesWithCourse,
  );

export const CourseFacultiesRoutes = router;
