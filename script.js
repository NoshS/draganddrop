window.onload = () => {
    
    var clicked = false;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2  = 0;
    var object = document.getElementById("object");

    object.onmousedown = e => {
        e.preventDefault();

       clicked = true;
        x1 = parseInt(object.style.left) || 0;
        y1 = parseInt(object.style.top) || 0;
        x2 = e.clientX;
        y2 = e.clientY;
    };
    document.onmousemove = e => {
        if (clicked) {
            object.style.left = e.clientX + 'px';
            object.style.top = e.clientY + 'px';
        }
    };
    document.onmouseup = () => {
        clicked = false;
    }
}