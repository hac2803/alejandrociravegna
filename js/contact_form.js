const formulario = document.getElementById('contact-form');
let inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

// console.log (inputs);

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    // password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    // +@[a-zA-Z0-9-]+\.([a-z\.]{2,6})
    telefono: /^\d{8,14}$/, // Sólo números.
    mensaje: /^.{20,200}$/ // Cualquier caracter
}

// Fields Object
const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        // case "usuario":
        // 	validarCampo(expresiones.usuario, e.target, 'usuario');
        // break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        // case "password":
        // 	validarCampo(expresiones.password, e.target, 'password');
        // 	validarPassword2();
        // case "password2":
        // 	validarPassword2();
        // break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
        // break;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.mensaje) {

        if (sendEmail()) {
            // Success Messages
            document.getElementById('formulario__mensaje-exito').innerHTML = 'Gracias por contactarme!';
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

        } else {
            // Error Messages
            document.getElementById('formulario__mensaje-error').innerHTML = 'Lo siento, hubo un error al enviar el formulario.';
            document.getElementById('formulario__mensaje-error').classList.add('formulario__mensaje-error-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-error').classList.remove('formulario__mensaje-error-activo');
            }, 5000);
        }

        // Reset form fields
        formulario.reset();

        // Reset object (Option 1)
        // for (const item in campos) {
        //     campos[item] = false;
        // }

        // Reset object (Option 1)
        Object.entries(campos).forEach(([key, val]) => {
            campos[key] = false;
        });

        // Reset icons
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

    } else {
        document.getElementById('formulario__mensaje-error').innerHTML = 'Por favor, completa el formulario correctamente.';
        document.getElementById('formulario__mensaje-error').classList.add('formulario__mensaje-error-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-error').classList.remove('formulario__mensaje-error-activo');
        }, 5000);
    }
});


// $("#sendMessage").on("click", function () {
const sendEmail = () => {
    const nombre = $("#nombre").val();
    const apellido = $("#apellido").val();
    const correo = $("#correo").val();
    const telefono = $("#telefono").val();
    const mensaje = $("#mensaje").val();

    let resultado = false;

    $.ajax({
        url: "https://formspreex.io/f/myybwrdk",
        method: "POST",
        async: false,
        dataType: "json",
        data: {
            Nombre: nombre,
            Apellido: apellido,
            Correo: correo,
            Telefono: telefono,
            Mensaje: mensaje
        },
        success: function () {
            resultado = true;
            // alert('OK!');
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert("Status: " + textStatus + " - " + XMLHttpRequest + " - " + errorThrown);
        }
    });

    // return false; // Disabled default redirect
    return resultado;
};
