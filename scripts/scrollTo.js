var doc = $(document);
var opinioncontent = $('#opinioncontent')
var activities = $('#activities').position().top
var activitiescontent = $('#activitiescontent').position().top
var isobus = $('#isobus').position().top
var isobuscontent = $('#isobuscontent').position().top
var nonnobit = $('#nonnobit').position().top
var nonnobitcontent = $('#nonnobitcontent').position().top
var multimedia = $('#multimedia').position().top
var multimediacontent = $('#multimediacontent').position().top
var sprar = $('#sprar').position().top
var sprarcontent = $('#sprarcontent').position().top
var headerr = $("#header")

$(document).on('scroll', () => {
	$(".colored").each((i, e) => {
		toWhite(e);
		posonpage = doc.scrollTop();

		
		if(posonpage + 25 >=sprarcontent) {
			toDark(e);
		} else if (posonpage + 25 >=sprar) {
			toWhite(e);
		} else if(posonpage + 25 >=multimediacontent) {
			toDark(e);
		} else if (posonpage + 25 >=multimedia) {
			toWhite(e);
		} else if(posonpage + 25 >=nonnobitcontent) {
			toDark(e);
		} else if (posonpage + 25 >=nonnobit) {
			toWhite(e);
		} else if(posonpage + 25 >=isobuscontent) {
			toDark(e);
		} else if (posonpage + 25 >=isobus) {
			toWhite(e);
		} else if(posonpage + 25 >=activitiescontent) {
			toDark(e);
		} else if (posonpage + 25 >=activities) {
			toWhite(e);
		} else if (posonpage + 25 >=opinioncontent) {
			toDark(e);
		}
	})
})

var toWhite = (e) => {
	$(e).removeClass("darktext").addClass("lighttext");
	headerr.removeClass("whitebg").addClass("transparent");
}

var toDark = (e) => {
	$(e).removeClass("lighttext").addClass("darktext");
	headerr.removeClass("transparent").addClass("whitebg");
}
