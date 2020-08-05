
"use strict";

$(function () {

    const $numbercircles = $("#numbercircles");

    $('#start').click(function () {       
            for (let i = 0; i < parseInt($numbercircles.val()); i++) {
                createCircle();
            }
    });

});


function createCircle() {
    const $width = $("#width");
    const $growthamount = $("#growthamount");
    const $growrate = $("#growrate");

    const $div = $('<div>', { class: 'circle' });

    $('#circles').append($div);
    $div.width($width.val());
    $div.height($width.val());

    let backc = "rgb(" + ramdom() + ", " + ramdom() + ", " + ramdom() + ")";
    $div.css("background-color", backc);
    $div.css("right", ramdom(10, 800) + "px");

    const id = setInterval(function () {
        let grow = $div.width() + parseInt($growthamount.val());
        $div.width(grow);
        $div.height(grow);
    }, $growrate.val());

    $div.click(function () {
        $div.remove();
        clearInterval(id);
    });
}

function ramdom(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


