/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { StudentServices } from './student.service';
import sendReponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsIntoDB();
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved succesffully',
    data: result,
  });
});

const getSingletudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentIntoDB(studentId);
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const {student} = req.body
  const result = await StudentServices.updateStudentIntoDB(studentId, student);
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentIntoDB(studentId);
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingletudent,
  updateStudent,
  deleteStudent,
};
