import { Schema, model } from 'mongoose';
import { AcademicSemesterModel, TAcademicSemseter } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<TAcademicSemseter,AcademicSemesterModel>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  { timestamps: true },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new AppError(httpStatus.FORBIDDEN,'Semester is already exists !');
  }
  next();
});


academicSemesterSchema.statics.isAcademicSemesterExists = async function (
  id: string,
) {
  const existingAcademicSemester = await AcademicSemester.findById(id);
  return existingAcademicSemester;
};

export const AcademicSemester = model<TAcademicSemseter,AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
);
