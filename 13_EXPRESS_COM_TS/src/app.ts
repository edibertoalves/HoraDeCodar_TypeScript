// 1 - iniciando projeto
//console.log("Express + TS!!!");


// 2 - incializar o express
import express, {Request, Response} from 'express'

const app = express();

// 3 - rota com POST
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Express + TS");
})

// 3 - rota com POST
app.post("/api/product", (req, res) =>{
    console.log(req.body); 
    return res.send("produto adicionado")
})

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {

    // req.method = verbo HTTP
    if (req.method === "POST") {
        return res.send("inseriu algum registro")
    } else if (req.method === "GET") {
        return res.send("leu algum registro")
    } else {    
        res.send("não podemos executar essa operação")    
    }    
})

// 5 - interfaces com express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("utilizando as interfaces")
}) 


// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
        size: ["S", "M", "L"]
    })
})

app.listen(3000, () => {
    console.log("porta 3000 inicializada com sucesso")
})