const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true // para ler o corpo das requisições json
}))

app.use(express.json())

app.post("/createproduct", (req, res) => {
    const name = req.body.name
    const price = req.body.price

    if (!name) {
        res.status(422).json({message: "O campo nome é obrigatório"})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({ message: `O produto ${name} foi criado com sucesso!`})
    
})


app.get('/', (req, res) => {
    res.status(200).json({
        message: "primeira rota criada com sucesso!"
    })
})

app.listen(3000)