$(document).on('scroll', () => {
	$(".colored").each((i, e) => {
		$(e).removeClass("darktext").addClass("lighttext");

		if ($(document).scrollTop() + parseInt(51) >=$('#about').position().top) {
			$(e).removeClass("lighttext").addClass("darktext");
		}
		
		if ($(document).scrollTop() - parseInt(51) >=$('#projects').position().top) {
			$(e).removeClass("darktext").addClass("lighttext");
		}

		if($(document).scrollTop() + parseInt(51) >=$('#contact').position().top) {
			$(e).removeClass("lighttext").addClass("darktext");
		}
	})
})
