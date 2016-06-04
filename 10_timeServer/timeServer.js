
var net = require('net'),
    port = +process.argv[2];

function pad(n, len) {
    n = n.toString();
    while(n.length < len) {
        n = "0" + n;
    }
    return n;
}

function dateToStr(dateObj) {
    var Y = pad(dateObj.getFullYear(),  4),
        // Month is 0-based, so 1 must be added.
        M = pad(dateObj.getMonth() + 1, 2),
        D = pad(dateObj.getDate(),      2),
        h = pad(dateObj.getHours(),     2),
        m = pad(dateObj.getMinutes(),   2);

    return [Y, M, D].join("-") + " " + [h, m].join(":");
}

var server = net.createServer(function (socket) {
    var now = new Date();
    socket.end(dateToStr(now) + "\n");
});

server.listen(port);