import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(1),
  confirmPassword: z.string().min(8),
});

export const notebookSchema = z.object({
  name: z.string().min(2).max(50),
});

export type loginSchemaValues = z.infer<typeof loginSchema>;
export type signupSchemaValues = z.infer<typeof signupSchema>;
export type notebookSchemaValues = z.infer<typeof notebookSchema>;
