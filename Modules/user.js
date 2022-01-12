const User = require("../Models/user");
exports.addUser = async(req,res,next)=>{
    console.log("im in add user");
    console.log("body",req.body);
   try{
    const {username} = req.body;
    var user = await User.create({
        username
     })
     res.send({success: true,user})
   }catch(error){
       console.log("error",error);
       res.send({error})
   }
}

exports.getUsers = async(req,res,next)=>{
    try{
     var result = await User.find();
     console.log("result",result);
     res.send(result);
    }catch(error){
        console.log("error",error);
        res.send({error});
    }
}