/*
We will create our own server.
Our paths with be /joe, /tony, /ryan
We will be using node's http and fs modules.
*/

//First we need dependencies.
var http = require('http');
var fs = require('fs');

//Next we need a port number.
var port = 8000;

//Now we need to use create our server.
var server = http.createServer(puppy);

//Time to create our server functionality.
function puppy(req, res) {
    var path = req.url;
    console.log(path);
    switch (path) {
        case "/tony":
            return fs.readFile(__dirname + "/tony.html", function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

    }

}

//We need this code to start server.
server.listen(port, function () {
    console.log("😀  Server is runnning on port: " + port);
})