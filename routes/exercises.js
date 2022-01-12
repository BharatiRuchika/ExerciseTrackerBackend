var express = require('express');
var router = express.Router();
var exerciseModule = require("../Modules/Exercise");
router.post("/add",exerciseModule.addExercise);
router.get("/",exerciseModule.getExercises);
router.get("/:id",exerciseModule.getExercise);
router.put("/update/:id",exerciseModule.updateExercise);
router.delete("/delete/:id",exerciseModule.deleteExercise)
module.exports = router;
