
const { Users_ar } = require("../data/UsersData")
const axios = require('axios');

//simple get function
const Get = () => {
    return Users_ar;
}
//get byId function   
const getById = (UserId) => {
    let user = "undefind"
    Users_ar.forEach(Element => {
        if (Element.UserId == UserId)
            user = Element;
    })
    return user;
}
//put function
function Put(User) {
    Users_ar.forEach(Element => {
        if (Element.UserId == User.UserId)
            Element = User;
        return Users_ar;
    })
}

//function post
const post = async (User) => {
    // Define the URL of the other server's controller
    const UrlValid = `https://phonevalidation.abstractapi.com/v1/?api_key=31dc0e395a954101867858561b811b55&phone=${User.UserPhon}`
    const urlDate = `https://www.hebcal.com/converter?cfg=json&date=${User.UserDate}g2h=1&strict=1`
    const UrlUuid = "https://www.uuidgenerator.net/api/guid.json"
    // Mail regex
    const regex = "/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/"
    try {
        // Call the other server's controller using axios
        const responseValid = await axios.get(UrlValid);
        if (responseValid.data.valid == false &&
            regex.test(User.UserEmail) == false &&
            checkObjectFields(user,fields) == false)

            return "number or Email not valid"
        else {
            const response = await axios.get(urlDate);
            User.UserEvree = response.data;
            const response2 = await axios.get(UrlUuid);
            User.UserUuid = response2.data;
            Users_ar.push(User)

            return Users_ar;
        }

    } catch (error) {
        console.error(error);
        throw error; // Throw the error so it can be caught by the controller
    }
}

//A function that checks if all fields exist in the user object
const fields = ['UserId', 'UserName', 'UserEmail','UserPhon','UserDate','UserEvree','UserUuid'];
function checkObjectFields(obj, fields) {
    for (let field of fields) {
      if (!(field in obj)) {
        return false;
      }
    }
    return true;
  }
  module.exports = { Get, getById, Put, post };

