

const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({meseege:"express work from index"})
})

module.exports = router

