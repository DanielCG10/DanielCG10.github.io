const PASSWORD = "Halley";
const FECHA = "2021-09-10"; // formato AAAA-MM-DD


function login() {

    const password = document.getElementById("password").value;
    const fecha = document.getElementById("fecha").value;
    const mensaje = document.getElementById("mensaje");
    const caja = document.querySelector(".login-box");


    if (password === PASSWORD && fecha === FECHA) {


        mensaje.style.color = "#9cffb0";
        mensaje.innerHTML = "❤️ Abriendo nuestra historia...";


        caja.style.animation = "fadeOut .8s forwards";


        setTimeout(() => {

            window.location.href = "cartita.html";

        }, 900);



    } else {


        mensaje.style.color = "#ffb5b5";

        mensaje.innerHTML =
        "Parece que olvidaste uno de nuestros recuerdos ❤️";


        document.getElementById("password").value = "";

        document.getElementById("fecha").value = "";



        caja.animate([

            {
                transform:"translateX(-8px)"
            },

            {
                transform:"translateX(8px)"
            },

            {
                transform:"translateX(-8px)"
            },

            {
                transform:"translateX(8px)"
            },

            {
                transform:"translateX(0)"
            }

        ],{

            duration:300

        });


    }

}



/* ==========================
   ESTRELLAS DEL FONDO
========================== */


const stars = document.getElementById("stars");


if(stars){


    const cantidadEstrellas =
    window.innerWidth < 600 ? 80 : 180;



    for(let i = 0; i < cantidadEstrellas; i++){


        let s = document.createElement("span");


        s.style.position = "absolute";


        s.style.left =
        Math.random()*100 + "vw";


        s.style.top =
        Math.random()*100 + "vh";



        let size =
        Math.random()*3 + 1;



        s.style.width =
        size + "px";


        s.style.height =
        size + "px";



        s.style.background = "white";


        s.style.borderRadius = "50%";


        s.style.opacity =
        Math.random();



        s.style.animation =
        `twinkle ${Math.random()*4+2}s infinite`;



        stars.appendChild(s);


    }

}



/* ==========================
   RESTAURAR LOGIN AL REGRESAR
========================== */


window.addEventListener("pageshow", function () {


    const caja = document.querySelector(".login-box");

    const mensaje = document.getElementById("mensaje");



    if(caja){


        caja.style.animation = "none";

        caja.style.opacity = "1";

        caja.style.transform = "none";


    }



    if(mensaje){


        mensaje.innerHTML = "";

    }


});