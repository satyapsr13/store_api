// index.js file of node js

// importing the module
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var querystring = require('querystring');
var port = process.env.PORT || 3000;
var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var filepath = path.join(process.cwd(), pathname);
    fs.exists(filepath, function(exists) {
        if (exists) {
            fs.readFile(filepath, function(err, data) {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end('500 - Internal Error');
                } else {
                    var mimeType = mime.lookup(pathname);
                    res.writeHead(200, {
                        'Content-Type': mimeType
                    });
                    res.end(data);
                }
            });
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('404 - Not Found');
        }
    });
}).listen(port);
console.log('Server running at http://localhost:' + port);

// server running at http://localhost:3000/
// server running at http://localhost:3000/index.html
// server running at http://localhost:3000/assets/style.css
// server running at http://localhost:3000/assets/script.js
// server running at http://localhost:3000/assets/image.png
// server running at http://localhost:3000/assets/image.jpg
// server running at http://localhost:3000/assets/image.gif
// server running at http://localhost:3000/assets/image.jpeg
// server running at http://localhost:3000/assets/image.svg
// server running at http://localhost:3000/assets/image.webp
// server running at http://localhost:3000



