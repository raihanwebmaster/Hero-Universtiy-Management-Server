import { Schema, model } from 'mongoose';
import {
  AcademicFacultyModel,
  TAcademicFaculty,
} from './academicFaculty.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
// import AppError from '../../errors/AppError';
// import httpStatus from 'http-status';

const acdemicFacultySchema = new Schema<TAcademicFaculty, AcademicFacultyModel>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

acdemicFacultySchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicFaculty.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic Faculty is already Exist!',
    );
  }
  next();
});

// acdemicFacultySchema.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery();
//   const isAcademicFacultyExist = await AcademicFaculty.findOne(query);
//   if (!isAcademicFacultyExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       'This Academic Faculty does not exist Exist!',
//     );
//   }
//   next();
// });

acdemicFacultySchema.statics.isAcademicFacultyExists = async function (
  id: string,
) {
  const existingAcademicFaculty = await AcademicFaculty.findById(id);
  return existingAcademicFaculty;
};

export const AcademicFaculty = model<TAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  acdemicFacultySchema,
);
