

var capa = document.getElementById("capa");

//El raton entra en la capa 

capa.addEventListener("mouseenter" , (ev) =>{

    capa.style.backgroundColor = "green";

});

//El raton sale de la capa

capa.addEventListener("mouseleave" , (ev) =>{

    capa.style.backgroundColor= "transparent";


});

//Pulsamos el boton principal de la capa:

capa.addEventListener("mousedown" , (ev)=> {

    if (ev.button == 0) {

        capa.style.backgroundColor = "red";

        
    }
    else if(ev.button == 2){

        capa.style.backgroundColor = "blue";
    }

});

//pulsamos con el boton principal sobre la capa:

capa.addEventListener("mouseup" , (ev) => {

    capa.style.backgroundColor = "green"


});

//Si pulsamos con el boton secundario

capa.addEventListener("contextmenu" , (ev) =>{

    ev.preventDefault();
});