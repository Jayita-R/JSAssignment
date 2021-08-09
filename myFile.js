var fs=require('fs');

var http=require('http');

http.createServer(function(req,res){
    fs.readFile('demoFile.html',function(err,d){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(d);
        return res.end();
    })
}).listen(3000);
console.log("Localhost listening to the port 3000");