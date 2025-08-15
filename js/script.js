//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

  


document.getElementById("btnMenu").addEventListener("click", () => {
  document.getElementById("mobileLinks").classList.toggle("activo");

});


function mostrarAlerta() {
  Swal.fire({
    title: '🎉 Cupón Copiado. ',
    text: 'Pegue el codigo en la seccion cupones del formulario de contacto. Recuerde solo se puede usar 1 cupón por mudanza (uso exclusivo por la web).',
    icon: 'info',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#3085d6'
  });
}

function copiarCupon(codigo) {
  navigator.clipboard.writeText(codigo);
  mostrarAlerta();
}

document.getElementById('formMudanza').addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        origen: document.getElementById('origen').value,
        destino: document.getElementById('destino').value,
        fecha: document.getElementById('fecha').value,
        cupon: document.getElementById('cupon').value,
        detalle: document.getElementById('detalle').value
    };

    const res = await fetch('http://https://backmudaflet2025.onrender.com/api/mudanza', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const resultado = await res.json();
    if (resultado.ok) {
        Swal.fire({
            title: '✅ ¡Formulario enviado!',
            text: 'Te vamos a contactar a la brevedad.',
            icon: 'success'
        });
        document.getElementById("formMudanza").reset();
    } else {
        Swal.fire({
            title: '❌ Error',
            text: 'Hubo un problema al enviar el formulario.',
            icon: 'error'
        });
    }
});