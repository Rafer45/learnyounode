var http       = require("http"),
    bl         = require("bl"),
    urls       = process.argv.slice(2),
    dataArr    = [],
    gottenURLs = 0;

var storeDataAndCount = function(i) {
    return function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                console.error(err);
            data = data.toString();
            dataArr[i] = data;
            gottenURLs++;
            if(gottenURLs === 3) {
                console.log(dataArr[0]);
                console.log(dataArr[1]);
                console.log(dataArr[2]);
            }
        }));
    }
}

http.get(urls[0], storeDataAndCount(0));
http.get(urls[1], storeDataAndCount(1));
http.get(urls[2], storeDataAndCount(2));