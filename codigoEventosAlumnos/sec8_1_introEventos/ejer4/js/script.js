
window.onload = function() {

    let boton = this.document.getElementById('contadorBoton');

    let contador = this.document.getElementById('contador');

    let cantidad = 0;


    boton.addEventListener('click' , function(){


        cantidad++;

        
        contador.textContent = 'Clics ' + cantidad;

    });

    

}