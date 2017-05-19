$(document).on('scroll', () => {
	$(".colored").each((i, e) => {
		toWhite(e);

		if ($(document).scrollTop() + parseInt(25) >=$('#opinioncontent').position().top) {
			toDark(e);
		}
		
		if ($(document).scrollTop() + parseInt(25) >=$('#activities').position().top) {
			toWhite(e);
		}

		if($(document).scrollTop() + parseInt(25) >=$('#activitiescontent').position().top) {
			toDark(e);
		}

		if ($(document).scrollTop() + parseInt(25) >=$('#isobus').position().top) {
			toWhite(e);
		}

		if($(document).scrollTop() + parseInt(25) >=$('#isobuscontent').position().top) {
			toDark(e);
		}

		if ($(document).scrollTop() + parseInt(25) >=$('#nonnobit').position().top) {
			toWhite(e);
		}

		if($(document).scrollTop() + parseInt(25) >=$('#nonnobitcontent').position().top) {
			toDark(e);
		}

		if ($(document).scrollTop() + parseInt(25) >=$('#multimedia').position().top) {
			toWhite(e);
		}

		if($(document).scrollTop() + parseInt(25) >=$('#multimediacontent').position().top) {
			toDark(e);
		}
	})
})

var toWhite = (e) => {
	$(e).removeClass("darktext").addClass("lighttext");
	$("#header").removeClass("whitebg").addClass("transparent");
}

var toDark = (e) => {
	$(e).removeClass("lighttext").addClass("darktext");
	$("#header").removeClass("transparent").addClass("whitebg");
}
