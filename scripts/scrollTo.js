$(document).on('scroll', function() {
    document.getElementById("header").className = "transparent";
   	if($(this).scrollTop() + parseInt(51) >=$('#about').position().top){
       	document.getElementById("header").className = "semi";
   	}
    if($(this).scrollTop() + parseInt(51) >=$('#projects').position().top){
       	document.getElementById("header").className = "transparent";
    }
    if($(this).scrollTop() + parseInt(51) >=$('#contact').position().top){
       	document.getElementById("header").className = "semi";
   	}
})
