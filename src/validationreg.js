let email = document.getElementById('inputemail');
let nombre = document.getElementById('inputnombre');
let apellidos = document.getElementById('inputnombre');
let contra = document.getElementById('inputcontra');
let error = document.getElementById('error');
error.style.color = 'red'


let form = document.getElementById('form_reg');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let ErrorMensaje = [];
    if (email.value === null || email.value === '') {
        ErrorMensaje.push('Ingresa tu correo correctamente')
    }
    if (nombre.value === null || nombre.value === '') {
        ErrorMensaje.push('Ingresa tu nombre correctamente')

    }
    if (apellidos.value === null || apellidos.value === '') {
        ErrorMensaje.push('Ingresa tus apellidos correctamente')

    }
    if (contra.value === null || contra.value === '') {
        ErrorMensaje.push('Ingresa tu contraseña correctamente')

    }

    if (contra.value!=null &&  contra.value != '' &&  email.value != ''  && email.value !=null && apellidos.value!=null &&  apellidos.value != '' && nombre.value!=null &&  nombre.value != ''){
        Mensaje()
    }

    error.innerHTML = ErrorMensaje.join(', ')
   

})


    function Mensaje(e) {
        alert("Gracias por crear tu cuenta en ProtoQ, procede a Iniciar Sesión")
        e.preventDefault()
        location.href = '/src/login.html'
    }
