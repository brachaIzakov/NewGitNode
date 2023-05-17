
const express = require('express')
const router = express.Router()
const { prods_ar } = require('../data/ShopData')
const shopProfile = require("../shopProfile")

router.get("/", (req, res) => {
    res.json(prods_ar)
})

router.post("/", (req, res) => {
    prods_ar.push(req.body)
    res.send(prods_ar)
})

router.put("/", (req, res) => {
    prods_ar.forEach(element => {
        if (element.id == req.body.id) {
            element.name = req.body.name
            element.cat = req.body.cat
            element.image = req.body.image
            element.price = req.body.price
        }
    });
    res.send(prods_ar)
})

router.delete("/", (req, res) => {
    let s
    prods_ar.forEach(element => {
        if (element.id == req.body.id)
            s = element
    })
})

router.get("/category", (req, res) => {
    let categoryQ = req.query.category
    let temp_ar = prods_ar.filter(item => {
        return item.cat == categoryQ
    })
    res.json(temp_ar)
})

module.exports = router
