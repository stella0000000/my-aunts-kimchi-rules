$(document).ready(function(){
    var audio = $("#kimchiCrunch")[0];
    $(".crunch a")
        .mouseenter(function() {
            audio.play();});
});