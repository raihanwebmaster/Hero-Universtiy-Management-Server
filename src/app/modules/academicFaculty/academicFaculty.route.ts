import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidations } from './academicFaculty.validation';
import validateRequest from '../../middlware/validateRequest';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidation,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get(
  '/:facultyId',
  AcademicFacultyControllers.getSingleAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidations.updateAademicFacultyValidation,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;
