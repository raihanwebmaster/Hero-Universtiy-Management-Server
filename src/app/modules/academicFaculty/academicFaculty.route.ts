import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidations } from './academicFaculty.validation';
import validateRequest from '../../middlware/validateRequest';
import auth from '../../middlware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidation,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get(
  '/:id',
  AcademicFacultyControllers.getSingleAcademicFaculty,
);

router.patch(
  '/:id',
  validateRequest(
    AcademicFacultyValidations.updateAademicFacultyValidation,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;
