var express= require('express');
var app=express();
var http=require('http');
var httpServer = http.createServer(app);
var readline = require('readline');

const fs = require('fs');

app.use(express.static("public"));


app.post("/insert",function(req,res){

    var nom=req.query.nom;
    var age=req.query.age;
    var sex=req.query.genre;
    var pw=req.query.pass;
    var mail=req.query.mail; 
    

    var jz={
        "nom":nom,
        "age":age,
        "genre":sex,
        "mail":mail,
        "pw":pw
    };
    var st=JSON.stringify(jz)+"\n";
    fs.appendFile("doc.txt",st, function(err) {
        if(err) {
            console.log(err);
        }
    
        console.log("The file was saved!");
        res.status(200);
        res.end("ok");
    }); 
    
}); 



app.get("/getp",function(req,res){
    var personne =req.query.per;
    console.log("Got request /getpersonne | param = "+personne);
   
    var tabPersonnes = [];

    var rl = readline.createInterface({
        input: fs.createReadStream('doc.txt')
    });
    
    
    rl.on('line', function(line) {
        var jj = JSON.parse(line);
        console.log('line -> '+line);
        tabPersonnes.push(jj);
    });



    rl.on('close', function (line) {
        var found = false;
        var result = {};
        for(var i=0;i<tabPersonnes.length;i++){
            var nn = tabPersonnes[i].nom;
            if(nn==personne){
                found = true;
                result = tabPersonnes[i];
            }
        }
        
        if(found==false){
            res.status(204);
            res.end("{}");
        }

        else{
            res.status(200);
            res.end(JSON.stringify(result));
        }
    });

});
    
    
app.get("/liste",function(req,res){
console.log("5dem");
    var tab = [];

    var rl = readline.createInterface({
        input: fs.createReadStream('doc.txt')
    });
    
    rl.on('line', function(line) {
        var jd = JSON.parse(line);
        tab.push(jd);
    });

    rl.on('close', function (line) {
            res.end(JSON.stringify(tab));
        
    });
    console.log(tab);

})



httpServer.listen(3000, function(){
    console.log("Server is listening on port 3000");
    });
