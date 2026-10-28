
let temperaturas = new Array(7);
function cargar(){
    for (let i = 0; i < 7; i++){
        let valor = prompt("Captura la temperatura del día " + (i + 1));
        temperaturas[i] = parseFloat(valor);
    }
}
function mostrar(){
    let cadena = "<h3>Temperaturas registradas</h3>";
    let suma = 0;
    let minima = temperaturas[0];
    let maxima = temperaturas[0];

    for (let i = 0; i < temperaturas.length; i++){
        cadena += "Día "+(i+1)+":"+temperaturas[i]+"<br>";
        suma = suma + temperaturas[i];
        if (temperaturas[i] < minima){
            minima = temperaturas[i];
        }
        if (temperaturas[i] > maxima){
            maxima = temperaturas[i];
        }
    }
    let promedio = suma / temperaturas.length;
    document.getElementById("temperaturas").innerHTML = cadena;
    document.getElementById("suma").innerHTML = "Suma: " + suma.toFixed(2);
    document.getElementById("promedio").innerHTML = "Temperatura promedio semanal: " + promedio.toFixed(2);
    document.getElementById("minima").innerHTML = "Temperatura mínima: " + minima;
    document.getElementById("maxima").innerHTML = "Temperatura máxima: " + maxima;
}