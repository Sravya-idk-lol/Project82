var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var radius = 4;
var color = "black";
var width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
mouseEvent = "mouseUP";
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseup(e)
{
mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{

    current_position_of_mouse_x = e.cientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.cientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginpath();
        ctx.strokesStyle = color;
        ctx.lineWidth = width;
        ctx.radius = radius;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0 , 2 * Math.PI);
        ctx.stroke();
    }
}