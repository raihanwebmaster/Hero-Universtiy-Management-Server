import { z } from 'zod';

const facultiesWithCourseValidationSchema = z.object({
  body: z.object({
    faculties: z.array(z.string()),
  }),
});

export const CourseFacultiesValidations = {
  facultiesWithCourseValidationSchema,
};
