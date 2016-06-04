// Libraries
var fs = require('fs'),
    path = require('path');

module.exports = function(dir, filterExt, callback) {
    if(filterExt.indexOf(".") != 0) {
    	filterExt = "." + filterExt;
    }

    return fs.readdir(dir, function(err, files) {
        if(err) {
        	return callback(err);
        }
    
        var data = files.filter(function(filename) {
            var ext = path.extname(filename);
            return ext == filterExt;
        });

        // console.log(data)

        return callback(null, data);
    });
}
