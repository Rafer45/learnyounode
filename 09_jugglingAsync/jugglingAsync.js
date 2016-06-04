var http       = require("http"),
    bl         = require("bl"),
    urls       = process.argv.slice(2),
    results    = [],
    gottenURLs = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

var storeDataAndCount = function(i) {
    return function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                console.error(err);
            results[i] = data.toString();
            gottenURLs++;
            if(gottenURLs === 3)
                printResults();
        }));
    }
}

function httpGet(i) {
    http.get(urls[i], storeDataAndCount(i))
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}