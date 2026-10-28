function gestionarAlumnos() {
    let alumnos = new Array(10);
    var cadena = '';

    for (let i = 0; i < 10; i++) {
        alumnos[i] = prompt("Captura el nombre del alumno " + (i + 1) + " de 10:");
    }

    cadena += '<div>Lista original de alumnos:</div>';
    for (let i = 0; i < 10; i++) {
        cadena += '<div>Posición ' + i + ': ' + alumnos[i] + '</div>';
    }

    cadena += '<hr>';

    let inicioEliminar = parseInt(prompt("¿De qué posición deseas empezar a eliminar? (0 al 9):"));
    let cantidadEliminar = parseInt(prompt("¿Cuántas posiciones deseas eliminar a partir de ahí?"));

    alumnos.splice(inicioEliminar, cantidadEliminar);

    cadena += '<div>Lista después de eliminar el rango:</div>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<div>Posición ' + i + ': ' + alumnos[i] + '</div>';
    }

    cadena += '<hr>';

    let nombreBuscar = prompt("Ingresa un nombre para buscar y vaciar su posición:");
    let encontrada = false;

    for (let j = 0; j < alumnos.length; j++) {
        if (alumnos[j] === nombreBuscar) {
            alumnos[j] = "Vacío";
            encontrada = true;
        }
    }

    if (encontrada) {
        cadena += '<div>Se encontró y vació la posición del alumno: ' + nombreBuscar + '</div>';
    } else {
        cadena += '<div>No se encontró el alumno ' + nombreBuscar + ' en la lista actual.</div>';
    }

    cadena += '<br><div>Lista final de alumnos:</div>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<div>Posición ' + i + ': ' + alumnos[i] + '</div>';
    }

    document.getElementById("resultadoAlumnos").innerHTML = cadena;
}

let diasSemana = new Array(7);
diasSemana[0] = "lunes";
diasSemana[1] = "martes";
diasSemana[2] = "miercoles";
diasSemana[3] = "jueves";
diasSemana[4] = "viernes";
diasSemana[5] = "sabado";
diasSemana[6] = "domingo";

let agendaMatriz;