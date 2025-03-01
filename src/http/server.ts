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

app.get("/", (req: any, res: any) => {
    res.render("index");
});

app.listen(8181, () => {
    console.log("Running")
})