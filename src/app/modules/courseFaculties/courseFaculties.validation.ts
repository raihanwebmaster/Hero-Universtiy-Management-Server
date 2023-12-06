import { z } from 'zod';

const facultiesWithCourseValidationSchema = z.object({
  body: z.object({
    facuilties: z.array(z.string()),
  }),
});

export const CourseFacultiesValidations = {
  facultiesWithCourseValidationSchema,
};
