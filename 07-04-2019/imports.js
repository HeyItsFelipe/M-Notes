var importedStuff = require('./exports');

console.log(importedStuff.export1.food);
console.log(importedStuff.export1.sayName);
importedStuff.export1.sayName();
console.log(importedStuff.export1.returns5() + 3);
importedStuff.export1.favoriteFood("Tony");