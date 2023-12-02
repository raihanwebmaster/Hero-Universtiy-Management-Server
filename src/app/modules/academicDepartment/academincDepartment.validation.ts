import { z } from 'zod';

const createAademicDepartmentZodSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be stirng',
      required_error: 'Faculty is required',
    }),
  }),
});

const updateAademicDepartmentZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Faculty must be string',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty must be stirng',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidation: createAademicDepartmentZodSchema,
  updateAademicDepartmentValidation: updateAademicDepartmentZodSchema,
};
