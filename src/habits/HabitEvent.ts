import { z } from "zod";

const habitEventSchema = z.object({
    userId: z.string(),
    habitId: z.string(),
    date: z.date(),
    completed: z.boolean(),
});

type HabitEvent = z.infer<typeof habitEventSchema>;
