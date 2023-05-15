const express = require("express")
const app=express()
app.get('/',(req, res)=>{
    res.status(200).json({
        messege:"hellow world"
    })
})
app.add
module.exports=app