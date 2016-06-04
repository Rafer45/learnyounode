
var mymod = require("./mymodule"),
    dir = process.argv[2],
    filterExt = process.argv[3];

mymod(dir, filterExt, function(err, data) {
    if (err) throw err;

    console.log(data.join("\n"));
});