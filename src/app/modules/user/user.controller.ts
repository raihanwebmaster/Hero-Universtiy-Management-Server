/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { UserServices } from './user.service';
import sendReponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentIntoDB(password, studentData);
  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is create successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
