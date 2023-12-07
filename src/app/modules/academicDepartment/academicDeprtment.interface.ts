import { Model, Types } from 'mongoose';

export type TAcademicDepartment = {
  name: string;
  academicFaculty: Types.ObjectId;
};

export interface AcademicDepartmentModel extends Model<TAcademicDepartment> {
  isAcademicDepartmentExists(id: string): Promise<TAcademicDepartment | null>;
}
