// Require dependencies
var http = require("http");  //comes with node
var fs = require("fs");  //comes with node

// Set our port to 8080
// There is no criteria for this number, but
// You'll usually see it as 3000, 8080, and 8000
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.url);
    // Capture the url the request is made to
    var path = req.url;

    // When we visit different urls, read and respond with different files
    switch (path) {

        case "/food":
            return fs.readFile(__dirname + "/food.html", function (err, data) {
                if (err) {
                    console.log("There is an error!!!!");
                    throw err;
                };
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/frameworks":
            return fs.readFile(__dirname + "/frameworks.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        // default to rendering index.html, if none of above cases are hit
        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }
}

// Starts our server.
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});