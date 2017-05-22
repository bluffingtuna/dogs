var express = require("express");

var router = express.Router();

// Import the model (dogs.js) to use its database function.
var dog = require("../models/dogs.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res){
	dog.all(function(data){
		res.render("index", {dogs: data});
	});
});

router.post("/", function(req,res){
	dog.insert(req.body.name, req.body.breed, function(){
		res.redirect("/");
	});
});

router.put("/:name", function(req,res){
		dog.update(req.params.name, function(){
		res.redirect("/");
	});
});

module.exports = router;