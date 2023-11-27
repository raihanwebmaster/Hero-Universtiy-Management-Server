
import { Student } from './student.model';

const getAllStudentsIntoDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentIntoDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([
    {$match: {id: id}}
  ])
  return result;
};

const deleteStudentIntoDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsIntoDB,
  getSingleStudentIntoDB,
  deleteStudentIntoDB,
};
