// 1 - iniciando projeto
//console.log("Express + TS!!!");


// 2 - incializar o express
import express, { NextFunction, Request, Response } from 'express'

const app = express();

// 3 - rota com POST
app.use(express.json())

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);

app.get("/", (req, res) => {
    res.send("Hello Express + TS");
})

// 3 - rota com POST
app.post("/api/product", (req, res) => {
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

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id

    if (id === "1") {
        const product = {
            "id": 1,
            "name": "bone",
            "price": 10
        }
        return res.json(product)
    } else {
        return res.send("produto não encontrado")
    }
})

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);

    console.log("review de produto não encontrado!")
})

// 9 - router handler
app.get("/api/user/:id", getUser)

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log("pode seguir");
        next()
    } else {
        console.log("acesso restrito");
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json({ "msg": "Bem vindo a área administrativa" });
})

function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com o id ${req.params.id}`);

    return res.send("O usuário foi encontrado")
}

// 12 - req e res com generics
app.get("/api/user/:id/details/:name", (req: Request<{ id: string, name: string }>, res: Response<{ status: boolean }>) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    res.json({ status: true });
})

// 13 - error
app.get("/api/error", (req: Request, res: Response) =>{
    try {
        throw new Error("aconteceu algo inesperado")
    } catch ( error: any) {
        res.status(500).json({ msg: error.message })        
    }
})


app.listen(3000, () => {
    console.log("porta 3000 inicializada com sucesso")
})