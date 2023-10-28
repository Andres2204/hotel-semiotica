
datos = {
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
    subtotal: (datos.habitacion*dias) + datos.servicio1 + datos.servicio2,
    total: subtotal+(subtotal*datos.iva),
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
    habitacionimagen(document.getElementById("habitacion").value)
    console.log(datos);
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
    console.log(document.getElementById("nombre").nodeType)
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
        console.log(edad)
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
    fechaIngreso = new Date(document.getElementById("fechaIngreso"));
    fechaSalida = new Date(document.getElementById("fechaSalida"));
    fechaActual = new Date();

    if (fechaIngreso > fechaActual && fechaIngreso < fechaSalida) {
        if (fechaSalida > fechaActual && fechaSalida > fechaIngreso) {
            datos.fechaIngreso = fechaIngreso;
            datos.fechaSalida = fechaSalida;
            datos.dias = fechaSalida - fechaIngreso;
        }
    } else {
        alert("Revisa las fechas de ingreso y salida.");
    }
}

function validarservicio1() {

    console.log()

    datos.servicio1 = document.getElementById("servicio1").value;
    document.getElementById("valorservicio1").innerHTML = "Valor: " + "$" + datos.servicio1;
}

function validarservicio2() {
    if(document.getElementById("servicio2").value != document.getElementById("servicio1").value){
        datos.servicio2 = document.getElementById("servicio2").value;
            document.getElementById("valorservicio2").innerHTML = "Valor: " + "$" + datos.servicio2;
    }else{
        alert("No puedes escoger el mismo servicio dos veces, vuelve a intentarlo");
    }
}

function habitacionimagen(habitacion){
    switch (habitacion) {
        case "normal":
            document.getElementsByClassName("foto-habitacion2")[0].src = "/assets/img/habitaciones_normales.jpg"
            datos.habitacion = 100
            document.getElementById("valorhabitacion").innerHTML = "valorhabitacion: " + datos.habitacion+ "$"
            break;
        case "camadoble":
            document.getElementsByClassName("foto-habitacion2")[0].src = "/assets/img/habitaciones_camas_dobles.jpg"
            datos.habitacion = 200
            document.getElementById("valorhabitacion").innerHTML = "valorhabitacion: " + datos.habitacion+ "$"
            break;
        case "5camas":
            document.getElementsByClassName("foto-habitacion2")[0].src = "/assets/img/habitacion-triple-3-camas.jpg"
            datos.habitacion = 300
            document.getElementById("valorhabitacion").innerHTML = "valorhabitacion: " + datos.habitacion+ "$"
            break;
        case "presidencial":
            document.getElementsByClassName("foto-habitacion2")[0].src = "/assets/img/Grand-Marina-Presidential-2.jpg"
            datos.habitacion = 400
            document.getElementById("valorhabitacion").innerHTML = "valorhabitacion: " + datos.habitacion+ "$"
            break;
        default:
            break;
    }
}