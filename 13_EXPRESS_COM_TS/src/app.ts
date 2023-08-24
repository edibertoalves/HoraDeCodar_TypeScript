// 1 - iniciando projeto
//console.log("Express + TS!!!");


// 2 - incializar o express
import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express + TS");
})

app.listen(3000, () => {
    console.log("porta 3000 inicializada com sucesso")
})