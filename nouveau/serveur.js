var express= require('express');
var app=express();
var http=require('http');
var httpServer = http.createServer(app);

app.use(express.static("public"));

var tabMem = [];



app.get("/add",function(req,res){

    var nom=req.query.nom;
    var age=req.query.age;
    var sex=req.query.genre;
    

    var jz={
        "nom":nom,
        "age":age,
        "genre":sex
    };
    
    
       tabMem.push(jz);
       console.log(jz.nom+" added successfully to table:");
       var strTab = JSON.stringify(tabMem);
       console.log("tab = "+strTab);
    
    res.end("ok");    
    
})
    
app.get("/getpersonne",function(req,res){
var persone =req.query.per;
console.log("Got request /getpersonne | param = "+persone);
var found = false;
var respo = {};
for(var i=0;i<tabMem.length;i++){
    console.log("current "+i+" : "+tabMem[i].nom);
    if((tabMem[i].nom)==persone){
        console.log(persone+" = "+tabMem[i].nom);
        found = true;
        respo = tabMem[i];
    }
}
if(found==true){
    res.status(200);
    res.end(JSON.stringify(respo));
}
else{
    res.status(204);
    res.end(JSON.stringify(respo));
}
});

app.get("/liste",function(req,res){
    var Tab = JSON.stringify(tabMem);
       console.log("tab = "+Tab);
    res.end(Tab);
})


httpServer.listen(3000,function(){
    console.log('server is listening on port 3000.......');
})