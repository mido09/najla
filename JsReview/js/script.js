$('document').ready(function(){

function addElement(str1,str2){
var e = document.createElement("div");
var cont = "<b>Nom:</b>"+str1+"<br><b>Age:</b>"+str2+"<br><hr align='center'>";
e.innerHTML = cont;
$("#elems").append(e);
}


$("#ajout").click(function(){
var nom = $("#nom").val();
var age = $("#age").val();

addElement(nom,age);

$("#nom").val("");
$("#age").val("");



});

});

