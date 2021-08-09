var http = require('http');
var lc = require('lower-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(lc.lowerCase("HELLO WORLD!"));
  res.end();
}).listen(3000);

console.log("Localhost listening to the port 3000");