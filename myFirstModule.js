var http=require('http');

var fe=require('./myfirst');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Current date and time is: "+fe.myDateTime());
    res.end();

}).listen(3000);

console.log("Localhost listening to the port 3000");