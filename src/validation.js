let email = document.getElementById('inputemail');
let contra = document.getElementById('contra');
let error = document.getElementById('error');
error.style.color = 'red'



let form = document.getElementById('form_principal');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let ErrorMensaje = [];
    if (email.value === null || email.value === '') {
        ErrorMensaje.push('Ingresa tu correo correctamente')
    }
    if (contra.value === null || contra.value === '') {
        ErrorMensaje.push('Ingresa tu contraseña correctamente')

    }
    if (contra.value!=null &&  contra.value != '' &&  email.value != ''  && email.value !=null){
        VerificarUsuario()
    }

    error.innerHTML = ErrorMensaje.join(' e ')
   

})

function VerificarUsuario(e) {
    let email = (document.getElementById('inputemail').value)
    if (email == "admin@admin.com") {
        location.href = '/src/admin.html'
    } else {
        location.href = '/src/main.html'
    }
    e.preventDefault()
}