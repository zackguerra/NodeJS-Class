const path = require('path');

//basename
console.log(path.basename(__filename));

//directory
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//creating a path object
console.log(path.parse(__filename));