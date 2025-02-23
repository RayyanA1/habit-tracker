import { z } from "zod";

const baseUser = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
});

export const createUserSchema = baseUser.extend({
    password: z.string(),
});

export const userSchema = baseUser.extend({
    id: z.string(),
    createdAt: z.date(),
});

type User = z.infer<typeof userSchema>;
