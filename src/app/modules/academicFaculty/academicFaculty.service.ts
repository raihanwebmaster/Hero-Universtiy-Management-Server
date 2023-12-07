import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  if (!(await AcademicFaculty.isAcademicFacultyExists(id))) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic Faculty does not exist Exist!',
    );
  }
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  if (!(await AcademicFaculty.isAcademicFacultyExists(id))) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic Faculty does not exist Exist!',
    );
  }
  const _id = id
  const result = await AcademicFaculty.findByIdAndUpdate(_id, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
