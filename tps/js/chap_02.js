$(document).ready(function(){
    const datenaiss = $("div#divAge").text().split("/");
    var annee = datenaiss[2];
    var mois  = datenaiss[1];
    var jour  = datenaiss[0];
    function calculAge(date) { 
        var diff = Date.now() - date.getTime();
        //console.log(diff);
        var age = new Date(diff); 
        //console.log(age);
        return Math.abs(age.getUTCFullYear() - 1970);
    };   
    $("div.titreCV").html("Aventurière et archéologue");
    $("div#divAge").html(calculAge(new Date(annee,mois,jour))+" ans");
    $("div.titreSection").css("background-color","lightblue");
    $("div.dateCV").css("font-weight", "bold");
});