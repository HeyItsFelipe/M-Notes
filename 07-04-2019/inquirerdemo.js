// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your favorite movie?",
            name: "movie"
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "What is your secret?",
            name: "secret"
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "What is your favorite food?",
            choices: ["egg whites", "lentils", "salad"],
            name: "food"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure you are done:",
            name: "done",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.done) {
            console.log("\nLet's watch " + inquirerResponse.movie);
            console.log("And let's also eat " + inquirerResponse.food + "!\n");
        }
        else {
            console.log("\n You chose not to be done. \n");
        }
    });