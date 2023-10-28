
datos = {
    nombre: "",
    id: "",
    edad: "",
    fechaIngreso: "",
    fechaSalida: "",
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
    validarFechaIngresoSalida();
    validarservicio1()
    validarservicio2()
    habitacionimagen()
    console.log(datos);
}

function validarID() {
    id = document.getElementById("indentificacion").value

    if (id.length > 12 || isNaN(id)) {
        alert("Id invalida")
    } else {
        datos.id = id;
    }
}

function validarNombre() {
    nombre = document.getElementById("nombre").value
    datos.nombre = nombre;
}


function validarEdad() {
    edad = 2023 - parseInt(new Date(datos.fechaNacimiento).getFullYear());
    datos.edad = edad
    document.getElementById("edadLabel").innerHTML = "Edad: " + edad;
}

function validarFechaIngresoSalida() {
    fechaIngreso = new Date(document.getElementById("fechaIngreso"))
    fechaSalida = new Date(document.getElementById("fechaSalida"))


    var diasDif = fechaSalida.getTime() - fechaIngreso.getTime();
    var dias = Math.round(diasDif/(1000 * 60 * 60 * 24));
    console.log(dias)
}

function validarservicio1() {
    datos.servicio1 = valorservicio(document.getElementById("servicio1").value)
    document.getElementById("valorservicio1").innerHTML = "Valor: " + datos.servicio1+"$"
    
}

function validarservicio2() {
    if(document.getElementById("servicio2").value != document.getElementById("servicio1").value){
        datos.servicio2 = valorservicio(document.getElementById("servicio2").value)
            document.getElementById("valorservicio2").innerHTML = "Valor: " + datos.servicio2+"$"
    }else{
        alert("No puedes escoger el mismo servicio dos veces, vuelve a intentarlo")
    }
}

function valorservicio(servicio) {
    valores = [20, 20, 10, 50, 50, 30]
    switch (servicio) {
        case "restaurante":
            return valores[0]
            break;
        case "servicioHabitacion":
            return valores[1]
            break;
        case "piscina":
            return valores[2]
            break;
        case "miniGolf":
            return valores[3]
            break;
        case "gimnasio":
            return valores[4]
            break;
        case "bar":
            return valores[5]
            break;
        default:
            break;
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