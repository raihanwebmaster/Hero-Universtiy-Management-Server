import { z } from 'zod';

const createAademicFacultyZodSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be string',
    }),
  }),
});

const updateAademicFacultyZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Faculty must be string',
      })
      .optional(),
  }),
});

export const AcademicFacultyValidations = {
  createAcademicFacultyValidation: createAademicFacultyZodSchema,
  updateAademicFacultyValidation: updateAademicFacultyZodSchema,
};
