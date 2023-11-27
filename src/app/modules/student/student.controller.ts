import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendReponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsIntoDB();
    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesffully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingletudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentIntoDB(studentId);
    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentIntoDB(studentId);
    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingletudent,
  deleteStudent,
};
