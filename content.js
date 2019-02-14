
var d = document.createElement("div");
d.setAttribute("style", "display:none; background-color: white; padding-top:19%; opacity: 0.5; width: 100%; height: 100%; text-align:center; font-size:9em; color:black; position: fixed; top: 0px; left: 0px; z-index: 9999; ");
d.textContent = "¿ÉS PUTO?"

var isVisible = false


setInterval(() => {
    
    d.style.display = 'block'
    
    setTimeout(() => {
        d.style.display = 'none'
    }, 50)
}, 60000)

document.body.appendChild(d);