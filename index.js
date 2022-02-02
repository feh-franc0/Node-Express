var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");//temos acesso ao conteeudo da body da nossa requisiçao

const app = express()


app.use("/meusite",express.static(path.join(__dirname,'client')))

let consoleBody = (req, res, next) => {
    // console.log(req.method);
    console.log(req.body);
    next()
}

let middleware = (req,res) => {
    res.send("Hello World"); 
}

app.use("/", bodyParser.json())
//use é o metodo que a gente ultiliza para o meddleware funcionar em todos os metodos
app.use("/", consoleBody) 

// pode usar assim
// app.get("/", consoleMethod)
app.get("/", middleware)
// ou assim 
// app.post("/", consoleMethod, middleware)
app.post("/", middleware)
// app.put("/", consoleMethod, middleware)
app.put("/", middleware)
// app.delete("/", consoleMethod, middleware)
app.delete("/", middleware)

app.listen(5000, () => console.log('Server rodando...'))

// const PORT = 5000;
// app.listen(PORT, ()=>{
//     console.log(`Server Runing on Port:${PORT}`)
// })

