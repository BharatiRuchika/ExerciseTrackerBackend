var Exercise = require("../Models/Exercise");
exports.addExercise  = async(req,res,next)=>{
    console.log("im in add exercise");
    console.log("body",req.body);
    try{
        const username = req.body.username.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);
        const newExercise = new Exercise({ username, description, duration, date });
        var result = await newExercise.save();
        res.send(result);
    }catch(error){
        res.send({error})
    }
}

exports.getExercises = async(req,res,next)=>{
    console.log("im in get Exercise");
    try{
      console.log("body",req.body);
      var result = await Exercise.find();
      res.send(result);
    }catch(error){
      res.send({error})
    }
} 

exports.getExercise = async(req,res,next)=>{
    try{
        console.log("im in get exercise");
        console.log("id",req.params.id);
        var result = await Exercise.find({_id:req.params.id});
        res.send(result);
    }catch(error){
       res.send({error})
    }
} 

exports.updateExercise = async(req,res,next)=>{
    try{
       console.log("im in update exercise");
       console.log("body",req.body);
       console.log("id",req.params.id);
       var exercise = await Exercise.findById(req.params.id)
       exercise.username = req.body.username;
       exercise.description = req.body.description;
       exercise.duration = Number(req.body.duration);
       exercise.date = Date.parse(req.body.date);
       var result = await exercise.save()
       res.send({result,success:true});
    }catch(error){
        res.send({error});
    }
}

exports.deleteExercise = async(req,res)=>{
    try{
      var id = req.params.id;
      const exercise = await Exercise.findById(id);
      if(exercise==null){
        return res.send("no order found with this order id");
         
      }
      await exercise.remove();
      res.status(200).json({
          success:true
      })
    }catch(error){
        res.send({error})
    }
}