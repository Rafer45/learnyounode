var fs = require('fs'),
	counter = 0,
	str = fs.readFileSync(process.argv[2]).toString();

for(i = 0; i < str.length; i++) {
	if(str[i] == "\n") {
		counter++;
	}
}

console.log(counter);