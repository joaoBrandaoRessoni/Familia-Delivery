const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

//Sync das tabelas
const syncAll = require("./database/syncTables.js")

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

syncAll()

//Middeware
const auth = require("./middleware/auth.js")
app.use(auth)

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perfil", (req, res) => {
    res.render("perfil")
})

app.listen(8181, (erro) => {
    if(erro){
        console.log("Erro")
    }else{
        console.log("Rodando")
    }
})