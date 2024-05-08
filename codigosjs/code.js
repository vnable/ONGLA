document.addEventListener('DOMContentLoaded', function () {
    //crea variables usables por js
    var inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    var button = document.getElementById('registerButton'); 
    var password = document.getElementById('Contrasena');
    var confirmPassword = document.getElementById('Contrasena2');
    var passworderror = document.getElementById('passworderror');
    var passwordnoigual = document.getElementById('passwordnoigual');

    function ActualizarBoton() { //crea la funcion que actualiza el boton
        var allFieldsFilled = Array.from(inputs).every(input => input.value.trim());
        var passwordValid = password.value.length >= 8;
        var passwordsMatch = password.value === confirmPassword.value
        
        // mostrar que la contraseña no es lo suficientemente larga
        if (allFieldsFilled && !passwordValid) {
            passworderror.style.display = 'block';
        } else {
            passworderror.style.display = 'none';
        }

        // mostrar que la contraseña no es lo suficientemente larga
        if (allFieldsFilled && !passwordsMatch) {
            passwordnoigual.style.display = 'block';
        } else {
            passwordnoigual.style.display = 'none';
        }

        button.disabled = !(allFieldsFilled && passwordValid && passwordsMatch);
    }

    inputs.forEach(input => {  //cada que se levanta una tecla actualiza el estado del boton
        input.addEventListener('keyup', ActualizarBoton);  
    });

    password.addEventListener('input', ActualizarBoton);
    confirmPassword.addEventListener('input', ActualizarBoton);
});