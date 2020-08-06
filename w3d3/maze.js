"use strict";

var win = 0;

$(document).ready(function () {

    $("div.boundary").mouseover(red);
    $("#end").mouseover(end);
    $("#start").click(start);
    $("#maze").mouseleave(lost);

});


function red() {
    if (win > 0) {
        $("div").children("div.boundary").addClass("youlose");
        win = 2;
    }
}

function end() {
    if (win == 1) $("#status").text("You win! :]")
    else if (win == 2) lost();
    win = 0;
}

function start() {
    $("div").children("div.boundary").removeClass("youlose");
    $("#status").text('Click the "S" to begin.')
    win = 1;
}

function lost() {
    if (win > 0) {
        $("#status").text("Sorry, you lost. :[")
        red();
    }
}