const mongoose = require("mongoose");
exports.connect = ()=>{
    try{
    mongoose.connect("mongodb+srv://guvi:admin123@cluster0.bdpws.mongodb.net/Exercise-Tracker?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
    console.log("database connected");
    }catch(err){
        console.log(err);
    }
}