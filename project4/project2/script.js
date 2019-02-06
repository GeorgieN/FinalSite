function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}


function setbackground()
{
window.setTimeout( "setbackground()", 500); // milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FF1493";
if(index == 2)
ColorValue = "CCAFFF";
if(index == 3)
ColorValue = "A6BEFF";
if(index == 4)
ColorValue = "99FFFF";
if(index == 5)
ColorValue = "D5CCBB";
if(index == 6)
ColorValue = "99FF99";
if(index == 7)
ColorValue = "FFFF99";
if(index == 8)
ColorValue = "FFCC99";
if(index == 9)
ColorValue = "CCCCCC";

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}
