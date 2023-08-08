console.log("Hello World From NodeJS");

// to create file and put msg-------------------------------------
const fs = require('fs');
fs.writeFileSync("Hello.txt","Hello From NodeJS")