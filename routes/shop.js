const express = require('express');
const router = express.Router();
const {prods_ar} = require("../Data/ShopData")
router.get('/',(req,res)=>{
    res.json(prods_ar)
})
router.get("/category",(req,res)=>{
    let categoryQ=req.query.category
    let temp_ar=prods_ar.filter(item=>{
        return item.cat == categoryQ
    })

    res.json(temp_ar)
})
const Shop = require("../ShopProfile")
// הוספה של מוצר חדש
router.post("/",(req,res)=>{
    prods_ar.push(req.body)
    res.send(prods_ar)
})
//עדכון של מוצר חדש
router.put("/",(req,res)=>{
    prods_ar.forEach(Element=>{
       if (Element.id==req.body.id)
        Element=req.body.id;
        res.send(prods_ar)
    })
})
//מחיקה של מוצר
router.delete("/",(req,res)=>{
    prods_ar.forEach(Element=>{
       if (Element.id==req.body.id)
       prods_ar.delete(Element)
        res.send(prods_ar)
    })
   
})
module.exports =router;