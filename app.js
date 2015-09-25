var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');


// sync way of creating directories recursively
var recMkdirSync = function (directory) {
    var pathArray = directory.replace(/\/$/, '').split('/');
    var segment;
    for (var i = 1; i <= pathArray.length; i++) {
        segment = pathArray.slice(0, i).join('/');
        !fs.existsSync(segment) ? fs.mkdirSync(segment) : null;
    }
};

// ansync way of creating directories recursively

var recMkdirAsync = function (directory, cb) {
    var pathArray = directory.replace(/\/$/, '').split('/');
    var segment, aggPath = '/';
    _.each(pathArray, function (pathElement) {
        segment = path.join(pathElement, '/');
        aggPath += segment;
        fs.exists(aggPath, function (exists) {
            console.log(exists);
            if (!exists) {
                fs.mkdir(segment, function (err) {
                    if (!err) {
                        cb(err);
                    }
                    else {
                        cb();
                    }
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