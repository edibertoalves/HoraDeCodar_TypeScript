// inicialização das variáveis do ENV
require("dotenv").config();

import express from  'express'
import  config  from "config";
import db from '../config/db';

const app = express()

// json Middleware
app.use(express.json());

// routes
import router from "./router";

// Logger
import Logger from "../config/logger"

// middlewares
import morganMiddleware from './middleware/morganMiddleware';

app.use(morganMiddleware);
app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();

    Logger.info("Aplicação está funcionando na porta " + port);
})