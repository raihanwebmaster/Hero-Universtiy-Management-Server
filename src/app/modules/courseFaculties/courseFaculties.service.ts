import { TCourseFaculty } from "./courseFaculties.interface";
import { CourseFaculty } from "./courseFaculties.mode";



const assignFacultiesWithCourseInfoDB = async (
  id: string,
  payload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      course: id,
      $addToSet: { faculties: { $each: payload } },
    },
    { upsert: true, new: true },
  );

  return result;
};

const removeFacultiesWithCourseFromDB = async (
  id: string,
  payload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: payload } },
    },
    { new: true },
  );

  return result;
};

export const CourseFacultiesServices = {
  assignFacultiesWithCourseInfoDB,
  removeFacultiesWithCourseFromDB,
};
