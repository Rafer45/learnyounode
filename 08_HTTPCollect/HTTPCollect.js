var http = require("http"),
    url = process.argv[2],
    str = "";

http.get(url, function(response) {
    response.setEncoding("utf8");
    response.on("error", console.error);
    response.on("data", function(d) {
        str += d
    });
    response.on("end", function() {
        console.log(str.length);
        console.log(str);
    });
});