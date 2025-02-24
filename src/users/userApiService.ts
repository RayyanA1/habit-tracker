import { hash } from "bcrypt";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserSchema, userLoginRequest } from "./User";

const router = Router();

router.post("/signup", (req: Request, res: Response) => {
    const parseResult = createUserSchema.safeParse(req.body);

    if (parseResult.error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: "Invalid User Signup data",
            errors: parseResult.error.errors,
        });

        return;
    }

    const userData = parseResult.data;

    const hashedPassword = hash(userData.password, 10);

    // TODO: Implement DB layer
});

router.post("/login", (req: Request, res: Response) => {
    const parseResult = userLoginRequest.safeParse(req.body);

    if (parseResult.error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: "Invalid User Signup data",
            errors: parseResult.error.errors,
        });

        return;
    }

    const loginRequest = parseResult.data;

    // DB get user by email address
    // and compare the password hash
});
