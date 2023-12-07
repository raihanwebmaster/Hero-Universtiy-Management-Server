import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import { AcademicDepartmentValidations } from './academincDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-department',
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
