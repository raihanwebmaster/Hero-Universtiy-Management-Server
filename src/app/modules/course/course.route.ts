import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';
const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/:id', CourseControllers.getSingleCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

router.get('/', CourseControllers.getAllCourses);
router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;
