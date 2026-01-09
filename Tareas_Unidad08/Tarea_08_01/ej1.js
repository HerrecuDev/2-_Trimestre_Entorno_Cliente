document.body.addEventListener('mousemove' , (e) => {

    const cartel = document.getElementById('cHola');


    // Para saber la posicion exacta del cursor.
    cartel.style.left = e.clientX + 'px';
    cartel.style.top = e.clientY + 'px';


});