var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var ta = "Ryan";
var num = 10;
var daysOfTheWeek = [
    {
        day: "Monday"
    },
    {
        day: "Tuesday"
    },
    {
        day: "Wednesday"
    }
];

app.get("/", function (req, res) {
    res.render("index", { name: ta, value: num, pet: "dog" });
});

app.get("/monday", function (req, res) {
    res.render("index2", { days: daysOfTheWeek });
});

app.listen(PORT, function () {
    console.log("🤔 Listening on http://localhost:" + PORT);
});