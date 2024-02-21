/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import sendReponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { CourseFacultiesServices } from './courseFaculties.service';

const assignFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const {faculties} = req.body;
  const result = await CourseFacultiesServices.assignFacultiesWithCourseInfoDB(courseId, faculties);

  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties assigned succesfully',
    data: result,
  });
});


const getFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const result = await CourseFacultiesServices.getFacultiesWithCourseFromDB(courseId);

  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties retrieved succesfully',
    data: result,
  });
});

const removeFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const {faculites} = req.body;
  const result = await CourseFacultiesServices.removeFacultiesWithCourseFromDB(courseId, faculites);

  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties removed succesfully',
    data: result,
  });
});




export const CourseFacultiesControllers = {
  assignFacultiesWithCourse,
  removeFacultiesWithCourse,
  getFacultiesWithCourse
};
