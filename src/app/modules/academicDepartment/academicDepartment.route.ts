import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import { AcademicDepartmentValidations } from './academincDepartment.validation';
import auth from '../../middlware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/create-academic-department',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicDepartmentValidations.createAcademicDepartmentValidation,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get(
  '/:id',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidations.updateAademicDepartmentValidation,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
