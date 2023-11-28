import { TAcademicSemesterCode, TAcademicSemesterName, TMonths } from "./academicSemester.constant";

export type TAcademicSemseter = {
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};
