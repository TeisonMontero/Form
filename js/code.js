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
  elemento.addEventListener("change", (e) => {
    linmpiarError(elemento);
  });

  if(!elemento.checkValidity()){
    if(elemento.validity.valueMissing){
      alert("El campo " + identificador + " no puede estar vacio");
    }
    if(elemento.validity.patternMismatch){
      alert("El " + identificador + " debe tener entre 3 y 30 letras");
    }
    error(elemento, identificador);
    return false;
  }

  return true;
}

function validarNumero(identificador){

  let elemento = document.getElementById(identificador);

  elemento.addEventListener("change", (e) => {
    linmpiarError(elemento);
  });

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

function validarSexo(identificador){
  let elemento = document.getElementById(identificador);
  linmpiarError(elemento);

  if(!elemento.checkValidity()){
    if(!elemento.checked){
      alert("Seleccione el Sexo");
      error(elemento);
      return false;
    }
  }
  return true;
}

function validar(e){
  if(campoVacio("nombre") && campoVacio("apellido") && validarNumero("edad") && validarNumero("cedula") && validarSexo("masculino") && confirm("Pulse aceptar si desea enviar el formulario")){
    return true;
  }
  else {
    e.preventDefault();
    return false;
  }
}

// Errores

function error(elemento){
  elemento.className = "error";
  elemento.focus();
}

function linmpiarError(elemento){
  elemento.className = "";
}