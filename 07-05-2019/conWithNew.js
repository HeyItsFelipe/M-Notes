// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(raining, noise) {
    // var this = {};
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    };
    /*
    this = {
        "raining": true,
        "noise": "Woof!",
        "makeNoise": function() {
            if(animalObj.raining === true) {
                console.log(animalObj.noise);
            }
        }
    }
    */
    //return this;
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");
console.log("dogs", dogs);
console.log("cats", cats);
// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();