// Libraries
var fs = require('fs'),
    path = require('path'),

// Arguments
    mydir = process.argv[2],
    filterExt = '.' + process.argv[3];

fs.readdir(mydir, function(err, files) {

    if(err) throw err;

    // Make an array with the files that fit the filter,
    // and join it so it becomes a string.
    console.log(files.filter(function(filename) {
        var ext = path.extname(filename);
        return ext == filterExt;
    }).join('\n'));

});