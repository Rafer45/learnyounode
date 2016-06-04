var totalNum = 0;

// console.log(process.argv);

for(var i = 2; i < process.argv.length; i++) {
	totalNum += Number(process.argv[i]);
}

console.log(totalNum);