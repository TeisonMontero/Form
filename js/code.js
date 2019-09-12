// Limpiar el forms

let clear = document.getElementById("limpiar");
clear.addEventListener("click", limpiarForm);

function limpiarForm(){
  document.getElementById("myForm").reset();
}

// validar formulario

let myForm = document.getElementById("myForm");

window.onload = iniciar;

function iniciar(){
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function campoVacio(identificador){

  let elemento = document.getElementById(identificador);

  linmpiarError(elemento);

  if(!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      alert("El campo " + identificador + " no puede estar vacio");
    }
    if(elemento.validity.patternMismatch){
      alert("El " + identificador + " debe tener entre 3 y 30 caracteres");
    }
    error(elemento);
    return false;
  }
  return true;
}

function validarNumero(identificador){

  let elemento = document.getElementById(identificador);

  linmpiarError(elemento);

  if(!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      alert("El campo " + identificador + " no puede estar vacio");
    }
    if(elemento.validity.rangeUnderflow){
      alert("La " + identificador + " debe ser mayor a 18");
    }
    if(elemento.validity.rangeOverflow){
      alert("La " + identificador + " debe ser menor a 100");
    }
    if(elemento.validity.patternMismatch){
      alert("El " + identificador + " debe tener 11 caracteres sin guiones");
    }
    error(elemento);
    return false;
  }
  if(isNaN(elemento.value)){
    alert("El campo " + identificador + " tiene que ser numerico");
    return false;
  }
  return true;
}

function validar(e){
  if(campoVacio("nombre") && campoVacio("apellido") && validarNumero("edad") && validarNumero("cedula") && confirm("Pulsa aceptar si deseas enviar el formulario")){
    return true;
  }
  else {
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  document.getElementById("mensajeError").innerHTML =
  elemento.validationMessage;
  elemento.className = "blue-gradient";
  elemento.focus();
}

function linmpiarError(elemento){
  elemento.className = "";
}