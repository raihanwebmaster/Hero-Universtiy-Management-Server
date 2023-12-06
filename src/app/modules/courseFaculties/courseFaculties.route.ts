import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { CourseFacultiesValidations } from './courseFaculties.validation';
import { CourseFacultiesControllers } from './courseFaculties.controller';
const router = express.Router();
router.put(
    '/:courseId/assign-faculties',
    validateRequest(CourseFacultiesValidations.facultiesWithCourseValidationSchema),
    CourseFacultiesControllers.removeFacultiesWithCourse,
  );
  router.delete(
    '/:courseId/remove-faculties',
    validateRequest(CourseFacultiesValidations.facultiesWithCourseValidationSchema),
    CourseFacultiesControllers.assignFacultiesWithCourse,
  );

export const CourseFacultiesRoutes = router;
