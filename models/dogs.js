var orm = require("../config/orm.js");

var dog = {
	all: function(cb) {
		orm.selectAll(cb, function(){
			cb();
		}); 
	},
	insert: function(name, breed, cb){
		orm.insertOne(name, breed, function(){
			cb();
		});
	},
	update: function(name, cb){
		orm.updateOne(name, function(){
			cb();
		});
	}
}

// Export the database functions for the controller

module.exports = dog;