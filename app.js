
var color;
var down;
var hueSelector;


$(document).ready(function () {

    color = new colorValue();

    hueSelector = $('#hueSelector');

    down = false;
    $(hueSelector).mousedown(function (event) {
        var hueSelectorOffset = hueSelector.offset();
        var hueSelectorSize = hueSelector.width();
        updateMouseColor(event.pageX, event.pageY, hueSelectorOffset.left, hueSelectorOffset.top, hueSelectorSize);
        updateBackgrounds();
        updateFields();
        updateTextColor();
        $(hueSelector).mousemove(function (event) {
            var hueSelectorOffset = hueSelector.offset();
            var hueSelectorSize = hueSelector.width();
            if (checkInside(event.pageX, event.pageY, hueSelectorOffset.left, hueSelectorOffset.top, hueSelectorSize)) {
                updateMouseColor(event.pageX, event.pageY, hueSelectorOffset.left, hueSelectorOffset.top, hueSelectorSize);
                updateBackgrounds();
                updateFields();
                updateTextColor();
            }
        });
    })
    $(document).mouseup(function () {
        $(hueSelector).unbind('mousemove');
    });

    color.update();
    updateBackgrounds();
    updateFields();
    updateTextColor();


});

function checkInside(mouseX, mouseY, circleX, circleY, circleSize) {
    var circleCenterX = circleX + (circleSize / 2);
    var circleCenterY = circleY + (circleSize / 2);

    var deltaX = circleCenterX - mouseX;
    var deltaY = circleCenterY - mouseY;

    return (Math.hypot(deltaX, deltaY) < circleSize / 2);
}

function updateBackgrounds() {
    $('#colorvalues').css("background-color", color.getHEXWithPound());
    $('body').css("background-color", "rgb(" + color.getDULLRGB() + ")");
}

function updateTextColor() {
    if (color.getHSBArr()[2] < 55) {
        var colorTexts = document.getElementsByClassName('colorText');
        for (var i = 0; i < colorTexts.length; i++) {
            colorTexts[i].style.color = "rgb(250,250,250)";
            colorTexts[i].style.borderColor = "rgb(250,250,250)";

        }
    }
    else {
        var colorTexts = document.getElementsByClassName('colorText');
        var oppositeColor = (color.getHSBArr()[0] + 120) % 360;
        for (var i = 0; i < colorTexts.length; i++) {
            colorTexts[i].style.color = "hsl(" + oppositeColor + ",50%,5%)";
            colorTexts[i].style.borderColor = "hsl(" + oppositeColor + ",50%,5%)";

        }
    }
}

function updateSat(value) {

    color.updateSat(value);
    updateBackgrounds();
    updateFields();

}

function updateBri(value) {

    color.updateBri(value);
    updateBackgrounds();
    updateTextColor();
    updateFields();
}

function updateFields() {
    document.getElementById('hsbvalues').innerHTML = color.getHSB();
    document.getElementById('rgbvalues').innerHTML = color.getRGB();
    document.getElementById('hexvalues').innerHTML = color.getHEX();
}

function updateMouseColor(mouseX, mouseY, circleX, circleY, width) {

    var circleCenterX = circleX + (width / 2);
    var circleCenterY = circleY + (width / 2);

    var deltaX = circleCenterX - mouseX;
    var deltaY = circleCenterY - mouseY;
    var rad = -Math.atan2(deltaY, deltaX) + (Math.PI); // In radians

    var deg = rad * (180 / Math.PI);

    color.updateHue(deg);

    $('#selectedHue').offset({ top: (mouseY - ($('#selectedHue').height() / 1.5)), left: (mouseX - ($('#selectedHue').width() / 1.5)) });

}

function copyToClipboard(values) {
    values.select();
    document.execCommand('copy');
}



