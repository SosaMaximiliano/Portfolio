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


//NOMBRE
derecha.querySelector("#datos").addEventListener('mouseover', ()=>{
    derecha.querySelector("#hr-nombre").style = "width:400px; opacity:1";
    derecha.querySelector("#datos").style = "background: linear-gradient(90deg, rgba(240,191,134,1) 0%, rgba(255,228,196,1) 100%)";

});

derecha.querySelector("#datos").addEventListener('mouseout', ()=>{
    derecha.querySelector("#hr-nombre").style = "width: 0px; opacity:0";
    derecha.querySelector("#datos").style = "background: rgba(255,228,196,1)";

});


//EXPERIENCIA
derecha.querySelector("#experiencia").addEventListener('mouseover', ()=>{
    derecha.querySelector("#hr-experiencia").style = "width:260px; opacity:1";
    derecha.querySelector("#experiencia").style = "background: linear-gradient(90deg, rgba(240,191,134,1) 0%, rgba(255,228,196,1) 100%)";
});

derecha.querySelector("#experiencia").addEventListener('mouseout', ()=>{
    derecha.querySelector("#hr-experiencia").style = "width: 0px; opacity:0";
    derecha.querySelector("#experiencia").style = "background: rgba(255,228,196,1)";
});


//EDUCACION
derecha.querySelector("#educacion").addEventListener('mouseover', ()=>{
    derecha.querySelector("#hr-educacion").style = "width:135px; opacity:1";
    derecha.querySelector("#educacion").style = "background: linear-gradient(90deg, rgba(240,191,134,1) 0%, rgba(255,228,196,1) 100%)";
});

derecha.querySelector("#educacion").addEventListener('mouseout', ()=>{
    derecha.querySelector("#hr-educacion").style = "width: 0px; opacity:0";
    derecha.querySelector("#educacion").style = "background: rgba(255,228,196,1)";

});


//IDIOMAS
derecha.querySelector("#idiomas").addEventListener('mouseover', ()=>{
    derecha.querySelector("#hr-idiomas").style = "width:100px; opacity:1";
    derecha.querySelector("#idiomas").style = "background: linear-gradient(90deg, rgba(240,191,134,1) 0%, rgba(255,228,196,1) 100%)";
});

derecha.querySelector("#idiomas").addEventListener('mouseout', ()=>{
    derecha.querySelector("#hr-idiomas").style = "width: 0px; opacity:0";
    derecha.querySelector("#idiomas").style = "background: rgba(255,228,196,1)";

});