function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    /*
    A function that returns the underlying character if the letter 
    has been guessed, or a placeholder (like an underscore) if the 
    letter has not been guessed
    */
    this.displayLetterOrUnderscore = function () {

        if (this.guessed === true) {
            return this.letter;
        } else {
            return "_";
        }
    }

    /*
    A function that takes a character as an argument and checks it 
    against the underlying character, updating the stored boolean value 
    to true if it was guessed correctly
    */
    this.userGuess = function (userGuessedLetter) {
        if (this.letter === userGuessedLetter) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    }
}

var letter = new Letter("m");
console.log(letter.displayLetterOrUnderscore());
letter.userGuess("b");
console.log(letter.displayLetterOrUnderscore());
letter.userGuess("m");
console.log(letter.displayLetterOrUnderscore());

module.exports = {
    "Letter": Letter
}

/*
Guess the secret letter:

_

*/