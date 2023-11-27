import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendReponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
