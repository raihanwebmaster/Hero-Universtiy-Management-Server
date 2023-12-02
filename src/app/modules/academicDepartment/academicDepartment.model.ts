import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDeprtment.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const acdemicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
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

acdemicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);
  if (!isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Department does not exist Exist!',
    );
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  acdemicDepartmentSchema,
);
