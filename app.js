const express=require('express')
const path = require('path')
const http = require('http')
const {routesInit} = require('./routes/route_config')
const app=express()
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
const server = http.createServer(app)
routesInit(app)
let port =process.env.port || "3000"
server.listen(port)