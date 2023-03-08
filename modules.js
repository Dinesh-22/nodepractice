// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./names");

const sayHi = require("./utils")
//console.log(names);

const data = require("./alternative-flavour");

console.log(data);

require("./mindgrenade");

sayHi("dini");
sayHi(names.john);
sayHi(names.peter);
