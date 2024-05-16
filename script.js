const cursorCircle = document.getElementById("cursorCircle")
const cursorDot = document.getElementById("cursorDot")
const handleMouseMove = (e) => {
    // console.log(e.clientX, e.clientY)
    cursorDot.style.top = (e.clientY - cursorDot.offsetHeight/2) + "px";
    cursorCircle.style.top = (e.clientY - cursorCircle.offsetHeight/2) + "px";
    cursorDot.style.left = (e.clientX - cursorDot.offsetWidth/2) + "px";
    cursorCircle.style.left = (e.clientX - cursorCircle.offsetWidth/2) + "px";
}

document.onmousemove = handleMouseMove;