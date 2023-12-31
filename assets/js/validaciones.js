
let datos = {
    nombre: "",
    id: "",
    edad: "",
    celular: "",
    fechaIngreso: "",
    fechaSalida: "",
    dias: "",
    servicio1: "",
    servicio2: "",
    habitacion: "",
    subtotal: "",
    total: "",
    iva: 0.19
}

function validarTodo() {
    document.getElementById("formulario").addEventListener("submit", (e) => e.preventDefault())
    validarID();
    validarNombre();
    validarEdad();
    validarCel();
    validarFechaIngresoSalida();
    validarservicio1()
    validarservicio2()
    habitacionimagen()
    validarTotal()
}

function validarID() {
    id = document.getElementById("indentificacion").value;

    if (id.length > 10 || isNaN(id)) {
        alert("Id invalida")
    } else {
        datos.id = id;
    }
}

function validarNombre() {
    nombre = document.getElementById("nombre").value;
    if (document.getElementById("nombre").nodeType === 1) {
        datos.nombre = nombre;
    } else {
        alert('El nombre no debe contener números.');
    }
}

function validarEdad() {
    let nacimiento = new Date(document.getElementById("fechaNacimiento").value);
    let fechaActual = new Date();

    if (nacimiento > fechaActual) {
        alert("La fecha ingresada no es válida.")
    } else {
        let edad = fechaActual.getFullYear() - nacimiento.getFullYear();
        if (fechaActual.getMonth() < nacimiento.getMonth() || (fechaActual.getMonth() === nacimiento.getMonth() && fechaActual.getDate() < nacimiento.getDate())) {
            edad--;
            datos.edad = edad;
            document.getElementById("edadLabel").innerHTML = "Edad: " + edad;
        }
    }
}

function validarCel() {
    let cel = document.getElementById("celular").value;

    if (cel.length > 10) {
        alert("El número celular es inválido");
    } else {
        datos.celular = cel;
    }
}

function validarFechaIngresoSalida() {
    let fechaIngreso = new Date(document.getElementById("fechaIngreso").value);
    let fechaSalida = new Date(document.getElementById("fechaSalida").value);
    let fechaActual = new Date();

    if (fechaIngreso > fechaActual && fechaIngreso < fechaSalida) {
        if (fechaSalida > fechaActual && fechaSalida > fechaIngreso) {
            datos.fechaIngreso = fechaIngreso;
            datos.fechaSalida = fechaSalida;
            datos.dias = (fechaSalida - fechaIngreso) / (1000 * 60 * 60 * 24);

        }
    } else {
        alert("Revisa las fechas de ingreso y salida.");
    }
}

function validarservicio1() {
    datos.servicio1 = parseInt(document.getElementById("servicio1").value);
    document.getElementById("valorservicio1").innerHTML = "Valor: " + "$" + datos.servicio1;
}

function validarservicio2() {
    if(document.getElementById("servicio2").value != document.getElementById("servicio1").value){
        datos.servicio2 = parseInt(document.getElementById("servicio2").value);
        document.getElementById("valorservicio2").innerHTML = "Valor: " + "$" + datos.servicio2;
    }else{
        alert("No puedes escoger el mismo servicio dos veces, vuelve a intentarlo");
    }
}

function habitacionimagen(){
    habitacion = document.getElementById("habitacion").value
    switch (habitacion) {
        case "normal":
            document.getElementById("foto-habitacion").src = "./assets/img/habitaciones_normales.jpg"
            datos.habitacion = 100
            document.getElementById("valorhabitacion").innerHTML = "Valor de Habitacion: " + datos.habitacion+ "$"
            break;
        case "camadoble":
            document.getElementById("foto-habitacion").src = "./assets/img/habitaciones_camas_dobles.jpg"
            datos.habitacion = 200
            document.getElementById("valorhabitacion").innerHTML = "Valor de Habitacion: " + datos.habitacion+ "$"
            break;
        case "camastriples":
            document.getElementById("foto-habitacion").src = "./assets/img/habitacion-triple-3-camas.jpg"
            datos.habitacion = 300
            document.getElementById("valorhabitacion").innerHTML = "Valor de Habitacion: " + datos.habitacion+ "$"
            break;
        case "presidencial":
            document.getElementById("foto-habitacion").src = "./assets/img/Grand-Marina-Presidential-2.jpg"
            datos.habitacion = 400
            document.getElementById("valorhabitacion").innerHTML = "Valor de Habitacion: " + datos.habitacion+ "$"
            break;
        default:
            break;
    }
}

function validarTotal() {
    datos.subtotal = (datos.habitacion*datos.dias) + datos.servicio1 + datos.servicio2;
    document.getElementById("subtotal").innerHTML = "Subtotal: " + "$" + datos.subtotal;

    datos.total = datos.subtotal + (datos.subtotal*datos.iva)
    document.getElementById("total").innerHTML = "Valor: " + "$" + datos.total;

}