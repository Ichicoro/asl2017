$(document).on('scroll', () => {
	//document.getElementById("header").className = "transparent";

	/* $('.navbarlinkdark').each((i) => {
		$(this).removeClass("navbarlinkdark").addClass("navbarlinklight");
	})
	$('.navbar_divider').attr("color", "#f2f2f2"); */

	$(".colored").each((i, e) => {
		//console.log(i + " " + e);
		$(e).removeClass("darktext").addClass("lighttext");

		if ($(document).scrollTop() + parseInt(51) >=$('#about').position().top) {
			$(e).removeClass("lighttext").addClass("darktext");
		}
		
		if ($(document).scrollTop() - parseInt(51) >=$('#projects').position().top){
			$(e).removeClass("darktext").addClass("lighttext");
		}

		if($(document).scrollTop() + parseInt(51) >=$('#contact').position().top){
			$(e).removeClass("lighttext").addClass("darktext");
		}
	})
})
