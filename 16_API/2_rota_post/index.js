const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true // para ler o corpo das requisições json
}))

app.use(express.json())

app.post("/createproduct", (req, res) => {
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.json({ message: `O produto ${name} foi criado com sucesso!`})
    
})


app.get('/', (req, res) => {
    res.json({
        message: "primeira rota criada com sucesso!"
    })
})

app.listen(3000)