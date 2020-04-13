var div1 = document.createElement("div");
div1.className = "demo";
document.body.appendChild(div1);
div1.onmousedown = function (e) {
  lastY = e.clientY;
  lastX = e.clientX;
  dragging = true;
};
document.onmousemove = function (e) {
  if (dragging === true) {
    var deltaY = e.clientY - lastY;
    var deltaX = e.clientX - lastX;
    var top = parseInt(div1.style.top) || 0;
    var left = parseInt(div1.style.left) || 0;
    var resultX = left + deltaX;
    var resultY = top + deltaY;
    if (resultY < 0) {
      resultY = 0;
    }
    if (resultX < 0) {
      resultX = 0;
    }
    div1.style.top = resultY + "px";
    div1.style.left = resultX + "px";

    lastY = e.clientY;
    lastX = e.clientX;
  }
};
document.onmouseup = function () {
  dragging = false;
};
