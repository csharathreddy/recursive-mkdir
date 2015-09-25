var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');


// sync way of creating directories recursively
var recMkdirSync = function (directory) {
    var pathArray = directory.replace(/\/$/, '').split('/');
    var segment;
    for (var i = 1; i <= pathArray.length; i++) {
        segment = path.slice(0, i).join('/');
        !fs.existsSync(segment) ? fs.mkdirSync(segment) : null;
    }
};

// ansync way of creating directories recursively

var recMkdirAsync = function (directory, cb) {
    var pathArray = directory.replace(/\/$/, '').split('/');
    var segment;
    _.each(pathArray, function (pathElement) {
        segment = path.join(pathElement, '/');
        fs.exists(segment, function (exists) {
            if (!exists) {
                fs.mkdir(segment, function (ack) {
                    // console.log("Directory created");
                });
            }
            else {
                null;
            }
        });
    });
};

module.exports.recMkdirSync = recMkdirSync;
module.exports.recMkdirAsync = recMkdirAsync; 