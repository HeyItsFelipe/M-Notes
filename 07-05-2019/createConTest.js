function OurConstructor(name, age, favorite) {
    // Properties
    this.name = name;
    this.age = age;
    this.favorite = favorite;

    // Methods
    this.printName = function () {
        console.log("My name is " + this.name);
    }

    this.printAge = function () {
        console.log("My age is " + this.age);
    }

    this.greeting = function (greeting) {
        greeting = greeting + "!";
        console.log(greeting);
    }

    this.printAnotherConstructorName = function (con) {
        console.log(con.name);
        con.greeting("Hi, This is " + con.name);
    }

    this.changeAge = function () {
        this.age = this.age - 1;
        this.printAge();
    }
}

var mesi = new OurConstructor("Mesi", 23, "flower");
mesi.printName();
mesi.printAge();
mesi.greeting("Hello");

var beyonce = new OurConstructor("Beyonce", 32, "music");
beyonce.printName();
beyonce.printAnotherConstructorName(mesi);

beyonce.changeAge();

