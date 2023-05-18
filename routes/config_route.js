
const usersR = require("../Controllers/UsersControllers");

exports.routesInit = (app) =>{  

    app.use("/users",usersR)

}