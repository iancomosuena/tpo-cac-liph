function validarformulario(event) {
    event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    displayMessage("error", "Por favor, complete todos los campos");
    return;
  }

  var nameRegex = /^[a-zA-Z]+$/;
  if (!name.match(nameRegex)) {
    displayMessage("error", "El campo 'Nombre' solo puede contener letras");
    return;
  }

  // Valida el formato del email utilizando una expresión regular (utilice ayuda de un tutorial)
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    displayMessage("error", "Por favor, ingrese un email válido");
    return;
  }

  // Valida que la contraseña tenga al menos 8 caracteres, una mayúscula y un número (utilice ayuda de un tutorial)
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!password.match(passwordRegex)) {
    displayMessage("error", "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número");
    return;
  }

  displayMessage("success", "Formulario enviado correctamente");
  document.getElementById("mi-formulario").reset(); // Resetea el formulario
}

function displayMessage(type, message) {
  var messageElement = document.getElementById("mensaje");
  messageElement.innerHTML = message;
  messageElement.className = type;


  setTimeout(function() {
    messageElement.innerHTML = "";
    messageElement.className = "";
  }, 10000);
}