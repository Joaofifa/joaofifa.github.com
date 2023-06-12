

//DOM
// esta declaracion tiene como resultado el elemento encontrado pero se permita una sola seleccion osea busqueda
// let tabla = document.querySelector(".table");



// esta declaracion tiene como resultado el elemento encontrado pero se permita mas de una seleccion osea busqueda
// let links = document.querySelectorAll("a");

// links.forEach(function (link) {
//     console.log(link);  
// });


// EVENTOS td son las celdas de nuestra tabla
//  let celdas = document.querySelectorAll("td");

//  hacemos el recorrido y por cada una de las celdas donde se de un clic se va a mostrar por pantalla la palabra click
//  celdas.forEach(function(td) {
//     td.addEventListener("click",function(td){
//         console.log(this);})
//     });


// obtener los elementos de la clase close
let links = document.querySelectorAll(".close"); 

// recorrerlos
// ev es un argumento q se le añade a la funcion q se adjunta al evento y esto permite bloquear el comportamiento por defecto de un evento
links.forEach(function(link) {
    // agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev) {
        ev.preventDefault();

        let content = document.querySelector('.content');

        // quitar las clases de animacion que ya tiene 
        content.classList.remove("animate__fadeInRight");
        content.classList.remove("animate__animated");

        // agregar clases animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        // timer q retrasa la animacion un segundo
        setTimeout(function(){
            location.href = "/boletines";
        }, 600);

        // setInterval(() => {
            
        // }, interval);

        return false;
    })
});




// let iconos = document.querySelectorAll("i");

// iconos.forEach(function (icono) {
//     icono.classList.remove("far");
//     icono.classList.add("fa-solid");
  
    
// })













