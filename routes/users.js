const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({messege:"run users from users"})
})
module.exports =router;