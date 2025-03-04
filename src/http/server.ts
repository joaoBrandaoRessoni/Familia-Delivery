import express from 'express'
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express();
app.use(express.json())
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/todos_pedidos", (req: any, res: any) => {
    res.render("todos_pedidos");
})

app.get("/finalizar_pedido", (req: any, res: any) => {
    res.render("finalizar_pedido");
})

app.get("/pedido", (req: any, res: any) => {
    res.render("pedido");
})

app.get("/perfil", (req: any, res: any) => {
    res.render("perfil");
})

app.get("/", (req: any, res: any) => {
    res.render("index");
});

app.listen(8181, () => {
    console.log("Running")
})