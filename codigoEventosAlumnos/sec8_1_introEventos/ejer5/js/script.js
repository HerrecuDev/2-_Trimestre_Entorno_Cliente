
window.onload = function() {

    let areaTexto = this.document.getElementById('miAreaTexto');


    areaTexto.addEventListener('keydown' , function(event) {


        console.log('Tecla presionada : ' + event.key);


    });

}