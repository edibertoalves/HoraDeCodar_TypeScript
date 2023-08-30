import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

<<<<<<< HEAD
import {validate} from "./middleware/handleValidation"
=======
import validate from "./middleware/handleValidation"
>>>>>>> 3dd0bb7f07279188b5b3810ba3ff910c5a7b6baf

const router = Router();

export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("Api trabalhando")
    })
    .post("/movie", validate, createMovie);