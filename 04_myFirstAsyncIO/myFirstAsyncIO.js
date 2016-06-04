
var fs = require('fs');

function countNewLines() {
    fs.readFile(process.argv[2], function(err, fileContents) {
        var newLines = fileContents.toString().split('\n').length - 1;
        console.log(newLines);
    });
}

countNewLines();