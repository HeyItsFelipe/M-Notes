

var importedStuff = require('../exports/exports.js');
var moreStuff = require('../exports/exports2.js');
var fs = require('fs');  // common error is forgetting imports


// console.log("Hello World!");
// console.log(process.argv);

// console.log(process.argv[2] + process.argv[3]);
// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));

// console.log(importedStuff);
// console.log(moreStuff);


/*
importedStuff = { 
    export1: { 
        food: 'pizza', 
        number: 3, 
        job: 'developer' 
    },
    export2: { 
        music: 'pop', 
        luckyNumbers: [ 1, 2, 3 ] 
    },
    export3: { 
        randomItems: [ 'duck', 12, 'apple', { "speak": "woof" } ] 
    } 
}

*/

// console.log(importedStuff.export1);
// console.log(importedStuff.export1.food);
// console.log(importedStuff.export1.job);

// console.log(importedStuff.export3.randomItems[0]);
// console.log(importedStuff.export3.randomItems[2]);
// console.log(importedStuff.export3.randomItems[3].speak)



// console.log(moreStuff.stuff.pet);
// console.log(moreStuff.firstNumber);


// fs.writeFile("animals.txt", process.argv, function (err) {

//     // If the code experiences any errors it will log the error to the console.
//     if (err) {
//         return console.log(err);
//     }

//     // Otherwise, it will print: "movies.txt was updated!"
//     console.log("animals.txt was updated!");

// });


// fs.readFile("../animals.txt", "utf8", function (error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//         return console.log(error);
//     }

//     // We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)
//     // var dataArr = data.split(",");

//     // We will then re-display the content as an array for later use.
//     // console.log(dataArr);

// });



// Next, we store the text given to us from the command line.
console.log(process.argv);
console.log(process.argv[2]);
var text = process.argv[2];

// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
fs.appendFile("animals.txt", text, function (err) {

    // If an error was experienced we will log it.
    if (err) {
        console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
        console.log("Content Added!");
    }

});