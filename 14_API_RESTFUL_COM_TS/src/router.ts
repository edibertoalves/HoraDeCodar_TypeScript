import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

import {validate} from "./middleware/handleValidation"

const router = Router();

export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("Api trabalhando")
    })
    .post("/movie", validate, createMovie);