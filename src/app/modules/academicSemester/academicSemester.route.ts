import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlware/validateRequest';
import { academicSemesterValidation } from './academicSemester.validaton';
const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidation.createAcdemicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
