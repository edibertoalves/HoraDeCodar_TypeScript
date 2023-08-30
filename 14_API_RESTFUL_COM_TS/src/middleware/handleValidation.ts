import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractErrors: object[] = []

<<<<<<< HEAD
    errors.array().map((err) => {
        if (err.type === "field") {
            extractErrors.push({ [err.path]: err.msg })            
        }
    })
=======
    errors.array().map((err) => extractErrors.push({ [err.param]: err.msg }))
>>>>>>> 3dd0bb7f07279188b5b3810ba3ff910c5a7b6baf

    return res.status(422).json({
        errors: extractErrors
    })

}