
var d = document.createElement("div");
d.setAttribute("style", "display:none; background-color: white; padding-top:19%; opacity: 0.5; width: 100%; height: 100%; text-align:center; font-size:9em; color:black; position: fixed; top: 0px; left: 0px; z-index: 9999; ");
d.textContent = "¿ÉS PUTO?"

var isVisible = false


setInterval(() => {
    isVisible = true    
}, 60000)

setInterval(() => {
    if (isVisible == true) {
        d.style.display = 'block'
        isVisible = false
    }else{
        d.style.display = 'none'
    }
}, 50)

document.body.appendChild(d);