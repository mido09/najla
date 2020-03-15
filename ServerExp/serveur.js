var express= require('express');
var app=express();
var http=require('http');
var httpServer = http.createServer(app);


app.use(express.static("public"));
httpServer.listen(3000,function(){
    console.log('server is listening on port 3000.......');
})