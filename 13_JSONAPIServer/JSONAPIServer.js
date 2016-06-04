
var http = require("http"),
    url  = require("url");

var port = +process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method !== "GET")
        return res.end("Please use GET");

    var urlObj = url.parse(req.url, true),
        time = new Date(urlObj.query.iso),
        path = urlObj.pathname;

    if(path === "/api/parsetime") {
        time = {
            "hour"  : time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        };
    } else if(path === "/api/unixtime") {
        time = {
            "unixtime": time.getTime()
        };
    } else {
        return res.end("The provided path was invalid");
    }

    time = JSON.stringify(time);

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(time);
});

server.listen(port);