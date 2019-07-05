// constructor function which can take in a series of values and create objects
// with the properties contained inside
function Character(name, profession, gender, age, strength, hitpoints) {
    // var this = {};
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    // method which prints all of the stats for a character
    this.printStats = function () {
        console.log("Name: " + this.name + "\nProfession: " + this.profession +
            "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
            this.strength + "\nHitPoints: " + this.hitpoints);
        console.log("\n-------------\n");
    };
    // method which determines whether or not a character's "hitpoints" are less then zero
    // and returns true or false depending upon the outcome
    this.isAlive = function () {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n-------------\n");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };

    // method which takes in a second object and decreases their "hitpoints" by this character's strength
    this.attack = function (character2) {
        character2.hitpoints -= this.strength;
    };

    // method which increases this character's stats when called
    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };

    this.consoleChar2 = function (character2) {
        console.log(character2.age);
    }

    //return this;
}

// creates two unique characters using the "character" constructor
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
/*
rogue = {
    this.name
    this.profession
    this.strength = 10;
    this.hitpoints
    this.attack = function (character2) {
        character2.hitpoints -= this.strength;
        character2.hitpoints = character2.hitpoints - this.strength;
    };
}
*/
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();

warrior.consoleChar2(rogue);