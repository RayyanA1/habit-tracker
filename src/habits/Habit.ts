import { z } from "zod";

const baseHabitSchema = z
    .object({
        name: z.string(),
        description: z.string(),
        frequencyCron: z.string(),
    })
    .strict();

export const createHabitSchema = baseHabitSchema;

export const habitSchema = baseHabitSchema.extend({
    id: z.string(),
});

type Habit = z.infer<typeof habitSchema>;
