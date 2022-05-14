var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var paragraph = document.getElementById("p");

function myRGB()
{
    var myColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")"; 

    paragraph.style.color = myColor;
}