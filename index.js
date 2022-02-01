//npm init -y
//npm install express

const express = require('express');
const path = require('path') //ajuda a montar o caminho dos nossos arquivos,modulo padrao do node
// Servir arquivos estaticos utilizando o express

const app = express()//recebe nosso objeto express

//xxx.xxx.x.xx:5000/meusite/
app.use("/meusite",express.static(path.join(__dirname,'client')))

app.get("/", (req,res) => {
    // res.set("Content-Type", tet/html);
    // res.type('.html') => 'text/html'
    // res.type('html') => 'text/html'
    // res.type('txt') => 'text/plain'
    // res.type('json') => 'application/json'
    // res.type('application/json') => 'application/json'
    // res.type('png') => 'image/png'
    res.send("<h1>Hello World From GET</h1>"); 
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server Runing on Port:${PORT}`)
})//escuta as requisisoes http

//terminal: ipconfig
//ache o Wireless LAN adapter Wi-Fi>IPv4 adress> xxx.xxx.x.xx
// +> a maquina que estamos usando tem esse endereço "XXX.XXX.X.XX"