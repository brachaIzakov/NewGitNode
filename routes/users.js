const express = require('express');
const router = express.Router();
const {Users_ar} = require("../Data/UsersData")
//const UserProfile = require("../UserProfile")

router.get('/',(req,res)=>{
    res.json(Users_ar)
})

router.put("/",(req,res)=>{
    Users_ar.forEach(Element=>{
       if (Element.UserId==req.body.UserId)
        Element=req.body;
        res.send(Users_ar)
    })
})
router.post("/",(req,res)=>{
    Users_ar.push(req.body)
    res.send(Users_ar)
})
module.exports =router;
