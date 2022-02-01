//npm init -y
//npm install express

const express = require('express');

const app = express()//recebe nosso objeto express

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server Runing on Port:${PORT}`)
})//escuta as requisisoes http

//terminal: ipconfig
//ache o Wireless LAN adapter Wi-Fi>IPv4 adress> xxx.xxx.x.xx
// +> a maquina que estamos usando tem esse endereço "XXX.XXX.X.XX"