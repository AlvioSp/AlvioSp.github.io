

function editStyle() {
    //alert("Hello, world!");
    changeTextSize();

}

function changetextStyle(obj) {

    const textArea = document.getElementById('text1');

    if ($(obj).is(":checked")) {
        textArea.style.fontSize = "24pt";
        textArea.style.color = "green";
        textArea.style.textDecorationLine = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";


    } else {
        textArea.style.fontSize = "12pt";
        textArea.style.color = "black";
        textArea.style.textDecorationLine = "none";
        document.body.style.backgroundImage = 'none';
    }

}

function changetextStyle2() {
    const textArea = document.getElementById('text1');
    textArea.removeAttribute("style")
    
    document.querySelector('.default').classList.toggle('textDecorator');  
}


function changeTextSize() {
    const textArea = document.getElementById('text1');
    var style = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
    let size = parseInt(style) + 2;
    textArea.style.fontSize = `${size}px`;
};


function interval() {
    setInterval(function () {
        changeTextSize();
    }, 500);
}


window.onload = function () {

    const btn1 = document.getElementById("btn1");
    btn1.onclick = interval;

    const chk2 = document.getElementById('chk2');
    chk2.onchange = changetextStyle2;

}