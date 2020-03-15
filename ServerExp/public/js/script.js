$('document').ready(function(){
var nb = 0;

function addElement(str1,str2){
    nb++;
    var e = document.createElement("div");
    var cont = "<b>Nom:</b><span id='nom"+nb+"'>"+str1+"</span><br><b>Age:</b>"+str2+"<br><center><button id='bt"+nb+"'>Modifier</button></center><hr align='center'>";
e.innerHTML = cont;
$("#elems").append(e);
$('#bt'+nb).click(function(){
    var currentId = this.id;
    var currentIndex = currentId.substring(2,currentId.length);
    var newName = prompt("Donnez le nom à modifier:");

    var idd = "nom"+currentIndex;
    $("#"+idd).html(newName);
})
}


$("#ajout").click(function(){
var nom = $("#nom").val();
var age = $("#age").val();

addElement(nom,age);

$("#nom").val("");
$("#age").val("");



});

});

