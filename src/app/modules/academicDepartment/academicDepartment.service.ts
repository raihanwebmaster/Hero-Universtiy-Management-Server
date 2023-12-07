import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { AcademicDepartment } from "./academicDepartment.model";
import { TAcademicDepartment } from "./academicDeprtment.interface";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  if (!(await AcademicDepartment.isAcademicDepartmentExists(id))) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic Department does not exist Exist!',
    );
  }
  const result = await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  if (!(await AcademicDepartment.isAcademicDepartmentExists(id))) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic Department does not exist Exist!',
    );
  }
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
