const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.urlencoded({
    extended: true, // para ler o corpo das requisições json
}))

app.use(express.json())

// rotas endpoints
app.get('/', (req, res) => {
    res.json({
        message: "primeira rota criada com sucesso!"
    })
})



app.listen(3000)