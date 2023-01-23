var izquierda = document.querySelector("#izquierda");
var derecha = document.querySelector("#derecha");

izquierda.addEventListener('mouseover' ,()=>{
    izquierda.querySelector(".img-container").style = 'height:240px; width:240px;opacity:1'
    izquierda.querySelector("hr").style = "width:100%";
    izquierda.querySelector("#conocimientos-titulo").style = "color:#fff"
});

izquierda.addEventListener('mouseout' ,()=>{
    izquierda.querySelector(".img-container").style = 'height:140px; width:140px;opacity:0.8'
    izquierda.querySelector("#conocimientos-titulo").style = "color:#a3a3a3"
    izquierda.querySelector("hr").style = "width:20%";
});

derecha.querySelector("#experiencia").addEventListener('mouseover')