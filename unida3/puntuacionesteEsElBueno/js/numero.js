function construirPatronOcho() {
    let contenido = "<h1>Ejercicio 3: Patrón del Número 8</h1>";
    contenido += "<div style='font-family:monospace; font-size:20px; line-height:1.2; white-space:pre;'>";
    
    let matrizOcho = [
        " OOOOO ",
        " O   O ",
        " O   O ",
        " OOOOO ",
        " O   O ",
        " O   O ",
        " OOOOO"
    ];

    for (let indice = 0; indice < matrizOcho.length; indice++) {
        contenido += matrizOcho[indice] + "<br>";
    }
    
    contenido += "</div>";
    document.getElementById("impBloques").innerHTML = contenido;
}