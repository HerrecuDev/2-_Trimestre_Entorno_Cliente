let boton = document.getElementById('contadorBoton');

let contador = document.getElementById('contador');
let cantidad = 0;

boton.addEventListener('click', function() {
cantidad++;
contador.textContent = 'Clics: ' + cantidad;
});