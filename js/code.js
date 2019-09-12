// Limpiar el forms

let clear = document.getElementById("limpiar");
clear.addEventListener("click", limpiarForm);

function limpiarForm(){
  document.getElementById("myForm").reset();
}

// validar formulario

var myForm = document.getElementById("myForm");

window.onload = iniciar;

function iniciar(){
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function campoVacio(identificador){

  let elemento = document.getElementById(identificador);

  linmpiarError(elemento);

  if(elemento.value == ""){
    alert("El campo " + identificador + " no puede estar vacio");
    error(elemento);
    return false;
  }
  return true;
}

function validarNumero(identificador){

  let elemento = document.getElementById(identificador);

  linmpiarError(elemento);

  if(elemento.value == ""){
    alert("El campo " + identificador + " no puede estar vacio");
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
  if(campoVacio("nombre") && campoVacio("apellido") && validarNumero("edad") && validarNumero("cedula") && confirm("Pulsa aceptar si quieres enviar el formulario")){
    return true;
  }
  else {
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  elemento.className = "error";
  elemento.focus();
}

function linmpiarError(elemento){
  elemento.className = "";
}