import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { createHabitSchema } from "./Habit";

const router = Router();

router.post("/", (req, res) => {
    const parseResult = createHabitSchema.safeParse(req.body);
    if (!parseResult.success) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: "Invalid Habit Data",
            errors: parseResult.error.errors,
        });

        return;
    }

    const habitSchema = parseResult.data;

    // TODO: Write Habit Schema to repo
});

export default router;
