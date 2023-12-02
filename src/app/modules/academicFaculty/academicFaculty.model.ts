import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const acdemicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  acdemicFacultySchema,
);
