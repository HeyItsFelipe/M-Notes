// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(raining, noise) {
    let animalObj = {};
    animalObj.raining = raining;
    animalObj.noise = noise;
    animalObj.makeNoise = function () {
        if (animalObj.raining === true) {
            console.log(animalObj.noise);
        }
    };
    /*
    animalObj = {
        "raining": true,
        "noise": "Woof!",
        "makeNoise": function() {
            if(animalObj.raining === true) {
                console.log(animalObj.noise);
            }
        }
    }
    */
    return animalObj;
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = Animal(true, "Woof!");
var cats = Animal(false, "Meow!");

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();
