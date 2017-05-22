//Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm= {
	selectAll: function(cb) {
		var queryString = "SELECT * FROM dogs;";
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(name, breed, cb){
		var queryString = "INSERT INTO dogs (name, breed) VALUES (?,?)";
		connection.query(queryString, [name, breed], function(err, result){
			if (err) throw err;
			cb();
		});
	},
	updateOne: function(name, cb){
		var queryString = "UPDATE dogs SET adopted=true WHERE name=?";
		connection.query(queryString, [name], function(err, result){
			if (err) throw err;
			cb();
		});
	}
};

module.exports = orm;