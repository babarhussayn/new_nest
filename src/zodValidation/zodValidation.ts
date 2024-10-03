import { z } from 'zod';

export const createUserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    email: z.string(),
  })
  .required();

export type CreateCatDto = z.infer<typeof createUserSchema>;
