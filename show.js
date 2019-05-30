
var step = 0, steps = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    setup();
});

document.addEventListener("keydown", function (event) {
    keyDown(event);
})

function keyDown(event) {
    //left
    if (event.keyCode == 37 || event.key == 'a') {
        next();
    }
    //right
    else if (event.keyCode == 39 || event.key == 'd') {
        previous();
    }
}

function next() {


    if (step < steps) {
        step++;
    }
}

function previous() {

    if (step > 1) {
        step--;
    }
}

function setup() {
    var presentation = document.getElementById("presentation");
    for (let s of presentation.children) {
        for (let e of s.children) {
            e.style.opacity = 0;
            steps++;
        }
    }
    next();
}