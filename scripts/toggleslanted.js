$("#slantedtoggle").click(() => {
    if (slanted) {
        $(".titlediv").each((i, e) => {
            console.log(e)
            $(e).removeClass("clipped");
        })
        slanted = false;
    } else {
        $(".titlediv").each((i, e) => {
            console.log(e)
            $(e).addClass("clipped");
        })
        slanted = true;
    }
})

var slanted = true;