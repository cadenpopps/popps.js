var DRAGDIST = 15, mouseX = 0, mouseY = 0, mouseDown = false, dStartx, dStarty, key, keycode;

function listen(event) {
    switch (event) {
        case "mousemoved":
            document.addEventListener("mousemove", function (event) {
                mousemovedListener(event);
            })
            break;
        case "mouseclicked":
            document.addEventListener("click", function (event) {
                mouseclickedListener(event);
            })
            break;
        case "mousedown":
            document.addEventListener("mousedown", function (event) {
                mousedownListener(event);
            })
            break;
        case "mouseup":
            document.addEventListener("mouseup", function (event) {
                mouseupListener(event);
            })
            break;
        case "mousedragged":
            document.addEventListener("mousedown", function (event) {
                mouseDown = true;
                dStartx = event.pageX;
                dStarty = event.pageX;
            });
            document.addEventListener("mousemove", function (event) {
                if (mouseDown && abs(dStartx - event.pageX) > DRAGDIST && abs(dStarty - event.pageY) > DRAGDIST) {
                    mousedraggedListener(event);
                }
            });
            document.addEventListener("mouseup", function () {
                mouseDown = false;
            });
            break;
        case "keypressed":
            document.addEventListener("keypress", function (event) {
                keyPressedListener(event);
            });
            break;
        case "keydown":
            document.addEventListener("keydown", function (event) {
                keyDownListener(event);
            });
            break;
        case "keyup":
            document.addEventListener("keyup", function (event) {
                keyUpListener(event);
            });
            break;
        case "windowresized":
            window.addEventListener("resize", windowResizedListener);
            break;
    }
}

function mousemovedListener(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    mouseMoved();
}

function mouseclickedListener(event) {
    if (cancelClick) {
        cancelClick = false;
    }
    else {
        mouseX = event.pageX;
        mouseY = event.pageY;
        mouseClicked();
    }
}

function mousedownListener(event) {
    mouseDown = true;
    mouseX = event.pageX;
    mouseY = event.pageY;
    mouseD();
}

function mouseupListener(event) {
    mouseDown = false;
    mouseX = event.pageX;
    mouseY = event.pageY;
    mouseU();
}

function mousedraggedListener(event) {
    cancelClick = true;
    mouseX = event.pageX;
    mouseY = event.pageY;
    mouseDragged();
}

function keyPressedListener(event) {
    key = event.key;
    keycode = event.code;
    keyPressed();
}

function keyDownListener(event) {
    key = event.key;
    keycode = event.code;
    keyDown();
}

function keyUpListener(event) {
    key = event.key;
    keycode = event.code;
    keyUp();
}