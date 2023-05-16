const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({messege:"run klasa from index"})
})
module.exports =router;