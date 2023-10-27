
datos = {
    nombre:"",
    id:"",
    fechaNacimiento:"",
    edad:"",
    fechaIngreso:"",
    fechaSalida:"",
    servicio1:"",
    servicio2:"",
    habitacion: "",
    subtotal: "",
    total: "",
    iva: 0.19
}

function validarTodo() {
    document.getElementById("formulario").addEventListener("submit", (e) => e.preventDefault())
    validarID();
    validarNombre();
    validarFechaNacimiento();
    validarEdad();

    console.log(datos);
}

function validarID() {
    id = document.getElementById("indentificacion").value
    
    if ( id.length > 12 || isNaN(id)) {
        alert("Id invalida")
    } else {
        datos.id = id;
    }
}

function validarNombre() {
    nombre = document.getElementById("nombre").value
    datos.nombre = nombre;
}

function validarFechaNacimiento() {
    fechaNacimiento = document.getElementById("fechaNacimiento").value

    datos.fechaNacimiento = fechaNacimiento

}

function validarEdad() {
    edad = 2023 - parseInt(new Date(datos.fechaNacimiento).getFullYear());
    datos.edad = edad
    document.getElementById("edadLabel").innerHTML = "Edad: " + edad;
}

function validarFechaIngresoSalida() {
    fechaIngreso = document.getElementById("fechaIngreso")
    fechaSalida = document.getElementById("fechaSalida")
}