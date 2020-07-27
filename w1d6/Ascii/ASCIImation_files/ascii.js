(function () {

    "use strict"

    window.onload = function () {
        document.getElementById("animation").onchange = getTextAnimation;
        document.getElementById("fontsize").onchange = setTextAnimationSize;
        document.getElementById("start").onclick = startClick;
        document.getElementById("stop").onclick = stopClick;
    };

    function getTextAnimation() {
        let an = document.getElementById("animation");
        let ta = document.getElementById("text-area")

        ta.innerHTML = window[an.value.toUpperCase()];

    }

    function setTextAnimationSize() {
        let fs = document.getElementById("fontsize");
        let ta = document.getElementById("text-area");
        let fontSize = ["7", "10", "12", "16", "24", "32"];

        var si = fontSize[fs.selectedIndex];
        ta.style.fontSize = si + "pt";
    }

    var inter = null;
    var i;

    function startClick() {
        let v = document.getElementById("text-area");
        let arr = v.innerHTML.split("=====");
        console.log(arr);
        let s;
        if (document.getElementById("turbo").checked) {
            s = 50;
        } else {
            s = 250;
        }
        inter = setInterval(myAnimate, s);

        function myAnimate() {

            if (i === undefined) {
                i = 0;
            } else if (i < (arr.length - 1)) {
                i = i + 1;
            } else if (i === (arr.length - 1)) {
                i = 0;
            }
            v.innerHTML = arr[i];
            document.getElementById("start").disabled = true;
            document.getElementById("animation").disabled = true;
            document.getElementById("stop").disabled = false;
        }
    }

    function stopClick() {
        clearInterval(inter);
        getTextAnimation();
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
    }

})();