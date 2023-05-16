const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { Users_ar } = require("../data/UsersData")
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

router.post("/", async (req, res) => {
    // Define the URL of the other server's controller
    const url = `https://www.hebcal.com/converter?cfg=json&date=${req.body.UserDate}g2h=1&strict=1`

    try {
        // Call the other server's controller using axios
        const response = await axios.get(url);
        Users_ar.push(req.body)
        res.json(dateGoyimmm)
        res.send(Users_ar)

        // Handle the response data here
        res.send(response.data);
    } catch (error) {
        // Handle any errors here
        console.error(error);
        res.status(500).send('Internal server error');
    }

})

module.exports = router
=======

router.get('/',(req,res)=>{
    res.json({messege:"run users from users"})
})
module.exports =router;
>>>>>>> 0674819c8848eb3a8b403d216db7f5e0ae2e2f53
