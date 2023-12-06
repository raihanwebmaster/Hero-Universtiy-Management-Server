import { Types } from "mongoose";

export type TCourseFaculty = {
    course: Types.ObjectId;
    faculties: [Types.ObjectId];
  };