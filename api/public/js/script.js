$('document').ready(function(){

    $("#add").click(function(){

        var nom = $("#name").val();
        var age = $("#age").val();
        var sx = $("#sex").val();
        var pw = $("#pass").val();
        var mail =$("#mail").val();
    $.post("http://localhost:3000/insert?nom="+nom+"&age="+age+"&genre="+sx+"&pass="+pw+"&mail="+mail, function(data, status){
             alert("server responded by "+data+" with status "+status);
        });

        $("#name").val("");
        $("#age").val("");
        $("#sex").val("");
        $("#pass").val("");
        $("#mail").val("");

    })

    
$("#chr1").click(function(){
  console.log("ccccc");
    var personne = $("#nn").val();
    $.get("http://localhost:3000/getp?per="+personne, function(data, status){
        alert('Got status '+status+" data : "+data);
        
        if(status=="success"){
          var card=JSON.parse(data);

            $("#ss").html("  <div class=\"row\">"+
            "<div class=\"col s12 m5\">"+
              "<div class=\"card-panel teal\">"+
                "<span class=\"white-text\">"+
                "nom:"+card.nom+"<br>age:"+card.age+"<br>genre :"+card.genre+
                
                "</span>"+
              "</div>"+
            "</div>"+
         "</div>");
        }
        else{ 
            $("#ss").html("Not found");
        }
      });
      $("#nn").val("");
      
});
$("#ls").click(function(){
  $.get("http://localhost:3000/liste", function(data, status){
            var jk = JSON.parse(data);
            $('#liste').html("");
            for(var i=0;i<jk.length;i++){ 
            var name=jk[i].nom;
            var age=jk[i].age;
            var sx=jk[i].genre;
            var tt = $("<div></div>");
            tt.html("<center><div class=\"row\">"+
    "<div class=\"col s12 m6\">"+
      "<div class=\"card blue-grey darken-1\">"+
        "<div class=\"card-content white-text\">"+
          "<span class=\"card-title\"></span>"+
          "<b>Nom:</b>"+name+"<br><b>Age:</b>"+age+"<br><b>Genre:</b>"+sx+
        "</div>"+
        "<div class=\"card-action\">"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div></center>");
            $('#liste').append(tt);
            $("#liste").css("text-align","center");

            }

        })

});



})