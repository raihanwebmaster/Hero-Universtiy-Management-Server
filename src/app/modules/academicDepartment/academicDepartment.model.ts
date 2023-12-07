import { Schema, model } from 'mongoose';
import {
  AcademicDepartmentModel,
  TAcademicDepartment,
} from './academicDeprtment.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const acdemicDepartmentSchema = new Schema<
  TAcademicDepartment,
  AcademicDepartmentModel
>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  { timestamps: true },
);

acdemicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Department is already Exist!',
    );
  }
  next();
});

// acdemicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery();
//   const isDepartmentExist = await AcademicDepartment.findOne(query);
//   if (!isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       'This Department does not exist Exist!',
//     );
//   }
//   next();
// });

acdemicDepartmentSchema.statics.isAcademicDepartmentExists = async function (
  id: string,
) {
  const existingAcademicDepartment = await AcademicDepartment.findById(id);
  return existingAcademicDepartment;
};

export const AcademicDepartment = model<
  TAcademicDepartment,
  AcademicDepartmentModel
>('AcademicDepartment', acdemicDepartmentSchema);
