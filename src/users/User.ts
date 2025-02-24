import { z } from "zod";

const baseUser = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
});

export const userLoginRequest = z.object({
    email: z.string(),
    password: z.string(),
});

export const createUserSchema = baseUser
    .extend({
        password: z
            .string()
            .regex(
                RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
                ),
                "Your password must be: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, & one special character"
            ),
    })
    .strict();

export const userSchema = baseUser.extend({
    id: z.string(),
    createdAt: z.date(),
});

type User = z.infer<typeof userSchema>;
