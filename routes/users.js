const express = require('express');
const router = express.Router();

const { Users_ar } = require("../Data/UsersData")
//const UserProfile = require("../UserProfile")
router.get('/', (req, res) => {
    res.json(Users_ar)
})

router.get('/getById', (req, res) => {
    let u = "undefind"
    Users_ar.forEach(Element => {
        if (Element.UserId == req.body.UserId)
            u = req.body;
    })
    if (u != "undefind")
        res.send(u)
    else
        res.status(404)
})

router.put("/", (req, res) => {
    Users_ar.forEach(Element => {
        if (Element.UserId == req.body.UserId)
            Element = req.body;
        res.send(Users_ar)
    })
})


const axios = require('axios');

 router.post("/",async (req, res) => {
    // Define the URL of the other server's controller
    const url = `https://www.hebcal.com/converter?cfg=json&date=2003-10-06g2h=1&strict=1`
    const UrlUuid = "https://www.uuidgenerator.net/api/guid.json"
    const UrlValid ="https://phonevalidation.abstractapi.com/v1/?api_key=31dc0e395a954101867858561b811b55&phone=14152007986'"
    try {
        // Call the other server's controller using axios
        const responseValid= await axios.get(UrlValid);
        if(responseValid.valid==false)
            res.json("numner not valid")
        else{
        const response = await axios.get(url);
        req.body.UserEvree=response.data;
        const response2 = await axios.get(UrlUuid);
        req.body.UserUuid=response2.data;
        Users_ar.push(req.body)
        //res.json(dateGoyimmm)
        res.send(Users_ar)
    }
        // Handle the response data here
    //     res.send(response.data);
     } catch (error) {
        // Handle any errors here
        console.error(error);
        res.status(500).send('Internal server error');
    }

})

module.exports = router


