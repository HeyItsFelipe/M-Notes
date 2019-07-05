var export1 = {
    "food": "pizza",
    "number": 3,
    "job": "developer",
    "sayName": function () {
        var name = "Joe";
        console.log(name);
    },
    "returns5": function () {
        return 5;
    },
    "favoriteFood": function (name) {
        console.log(name + "likes" + this.food);
    }
};

var export2 = {
    "music": "pop",
    "luckyNumbers": [1, 2, 3]
};

var export3 = {
    "randomItems": ["duck", 12, "apple", { "speak": "woof" }]
};

module.exports = {
    "export1": export1,
    "export2": export2,
    "export3": export3
};