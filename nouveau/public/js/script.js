$('document').ready(function(){

    $("#add").click(function(){

        var nom = $("#name").val();
        var age = $("#age").val();
        var sx = $("#sex").val();

        $.get("http://localhost:3000/add?nom="+nom+"&age="+age+"&genre="+sx, function(data, status){
             alert("server responded by "+data+" with status "+status);
        });

        $("#name").val("");
        $("#age").val("");
        $("#sex").val("");

    })
    $("#chr").click(function(){
        var personne = $("#nn").val();
        $.get("http://localhost:3000/getpersonne?per="+personne, function(data, status){
            alert('Got status '+status+" data : "+data);
            var card=JSON.parse(data);

            if(status=="success"){
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
            tt.html("<b>Nom:</b>"+name+"<br><b>Age:</b>"+age+"<br><b>Genre:</b>"+sx+"<hr>");
            $('#liste').append(tt);

            }

        })
    })


})