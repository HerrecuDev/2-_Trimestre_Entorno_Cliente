const input = document.getElementById('nombre');
const resultado = document.getElementById('resultado');

//Keyup se dispara cuando soltamos la tecla

input.addEventListener('Keyup' , function(ev){


    //elemento que dispara el evento
    const texto = ev.target.value;

    if(texto.trim() === ''){
        resultado.textContent = 'No hay nada escrito';

    }else{

        resultado.textContent = 'Has escrito ' + texto;
    }



})