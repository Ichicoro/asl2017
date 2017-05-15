$("#slantedtoggle").click(() => {
    if (slanted) {
        $(".titlediv").each((i, e) => {
            $(e).removeClass("clipped").removeClass("clippedtop");
        })
        slanted = false;
    } else {
        $(".titlediv").each((i, e) => {
            $(e).addClass("clipped");
        })
        slanted = true;
    }
})

var slanted = true;