import { Model } from "mongoose";

export type TAcademicFaculty = {
  name: string;
};


export interface AcademicFacultyModel extends Model<TAcademicFaculty> {
  isAcademicFacultyExists(_id: string): Promise<TAcademicFaculty | null>;
}
