# recursive-mkdir
Simple way of creating directories recursively

# Installation
npm install recursive-mkdir

# Usage
var recmkdir = require('recursive-mkdir');

# Asynchronous
var path = 'D:/out/in'
recmkdir.recMkdirAsync(path, function (err) {
    if (err) {
     	console.log(err); 
    }
    else { 
    	console.log("Directory created");
    }
});

# Synchronous
recmkdir.recMkdirSync(path);

The above two function directory structure as follows

D
|_out
	|_in