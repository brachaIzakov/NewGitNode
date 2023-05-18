const express = require('express');
const router = express.Router();
const serverUsers = require("../Services/serverUsers")


//get Controller
router.get('/', (req, res) => {
    //Receives the array from the service and returns it in json format
    res.json(serverUsers.Get())
})

//getById Controller
router.get('/getById', (req, res) => {
    res.json(serverUsers.getById(req.body))
})

//put Controller
router.put("/", (req, res) => {
    res.send(serverUsers.put(req.body));
})

//post controller
router.post = async (req, res) => {
    try {
      const result = await serverUser.post(req.body);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  };

module.exports = router


