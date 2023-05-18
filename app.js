const express=require('express')
const path = require('path')
const http = require('http')
const {routesInit} = require('./routes/config_route')

const app=express()
app.use(express.json())

const server = http.createServer(app)
routesInit(app)

let port =process.env.port || "3000"
server.listen(port)