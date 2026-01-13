const foto = document.getElementById('foto');

//Para guardar las rutas de las imagenes:
const original = 'img/142.jpeg';
const alternativa = 'img/imagen-generada-del-barco.jpg';

//Cuando entra el raton:
foto.addEventListener('mouseover' , function (){

    foto.src = alternativa;
})

//Cuando entra el raton : 

foto.addEventListener('mouseout' , function (){

    foto.src = original;

});