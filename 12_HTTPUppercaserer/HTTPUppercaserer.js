
var http = require("http"),
    fs   = require("fs"),
    map  = require("through2-map")
           .bind(undefined, {"wantStrings": true});

var port = +process.argv[2];

var server = http.createServer(function (req, res) {
    if(req.method !== "POST")
        return res.end("send me a POST\n");

    req.pipe(map(function(chunk) {
        return chunk.toUpperCase();
    })).pipe(res);
});

server.listen(port);