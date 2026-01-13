//Variable externa:
let colorActual = 'inicio';

//Seleccionamos el elemento :

const boton = document.getElementById('cambiarColor');

//Escuhamos el evento click

boton.addEventListener('click' , function() {

    //ALternamos entre dos colores :

    if (colorActual === 'green') {

        document.body.style.backgroundColor = 'red';
        colorActual = 'red';
        
    }else{
        document.body.style.backgroundColor = 'green';
        colorActual = 'green';
    }
});