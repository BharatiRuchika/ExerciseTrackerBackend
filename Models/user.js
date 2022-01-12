const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   username:{
       type:String,
       required:[true,"please enter user name"],
       maxLength:[30,"Your name cannot exceed 30 characters"],
       unique: true,
       trim: true,
       minlength: 3
   },
//    timestamps: true
}) 
module.exports = mongoose.model("User",userSchema,"User");