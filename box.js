document.onkeypress = function(e){
    var box = document.getElementsByTagName("box")[0];

    var top = window.getComputedStyle(box).top;
    var left = window.getComputedStyle(box).left;
    var xPosition = window.getComputedStyle(box).backgroundPositionX;
    var yPosition = window.getComputedStyle(box).backgroundPositionY;

    top = top.replace("px", "");
    top = parseInt(top);
    left = left.replace("px", "");
    left = parseInt(left);

    xPosition = xPosition.replace("px", "");
    xPosition = parseInt(xPosition);
    yPosition = yPosition.replace("px", "");
    yPosition = parseInt(yPosition);

    var pressed = e.key;

    //Set the new top and left positions of the box by updating the property!
    if (pressed == "w") {
        top -= 10;
        yPosition -= 56.25;
    } else if (pressed == "a") {
        left -= 10;
        xPosition -= 56.25;
    } else if (pressed == "s") {
        top += 10;
        yPosition += 56.25;
    } else if (pressed == "d") {
        left += 10;
        xPosition += 56.25;
        if (xPosition <= -168.75) {
            xPosition = 0;
        }
    }


    box.style.top = top + "px";
    box.style.backgroundPositionX = xPosition + "px";
    box.style.left = left + "px";
    box.style.backgroundPositionY = yPosition + "px";

    console.log(e.key);

}
