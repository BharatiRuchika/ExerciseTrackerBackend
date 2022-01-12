var express = require('express');
var router = express.Router();
var userModule = require("../Modules/user");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/add",userModule.addUser);
router.get("/allUsers",userModule.getUsers);
module.exports = router;
