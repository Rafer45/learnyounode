
var http = require("http"),
    fs   = require("fs");

var port = +process.argv[2],
    dir  = process.argv[3];

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"content-type": "text/plain"});
    fs.createReadStream(dir).pipe(res);
});
server.listen(port);