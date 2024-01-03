// Esta primera opcion es para que muestre, por cada vez que se ejecuta con el codigo node app.js, un nuevo dominio. 

// Creo una función que concatene los elementos de los 4 arreglos para generar una página aleatoria //

function DomainNameGenerator() {
    // Aquí van los let con los elementos con los que haremos las páginas
    let pronoun = ['Our', 'The'];
    let adj = ['great', 'big'];
    let noun = ['racoon', 'jogger'];
    let point = ['.com', '.es', '.net', '.us'];

    // Ahora tenemos que hacer que la función seleccione aleatoriamente algún elemento de cada arreglo.
    function SeleccionAleatoria(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Generar la página combinando los elementos aleatorios
    var GenerarPagina = SeleccionAleatoria(pronoun) +
        SeleccionAleatoria(adj) +
        SeleccionAleatoria(noun) +
        SeleccionAleatoria(point);

    // Por último, se mostrará el resultado de la excusa aleatoria en la consola.
    console.log('Domain Name Generator: ' + GenerarPagina);
}

// Llamada a la función para generar el nombre del dominio
DomainNameGenerator();


// Esta segunda opcion es para que muestre todas las alternativas posibles de paginas que se pueden crear con cada elemento de los let planteados, en el command. 

// Aquí van los let con los elementos con los que haremos las páginas
let pronoun = ['Our', 'The'];
let adj = ['great', 'big'];
let noun = ['racoon', 'jogger'];
let point = ['.com', '.es', 'net', 'us'];

// Iterar sobre cada elemento de pronoun
for (let i = 0; i < pronoun.length; i++) {
    // Iterar sobre cada elemento de adj
    for (let j = 0; j < adj.length; j++) {
        // Iterar sobre cada elemento de noun
        for (let k = 0; k < noun.length; k++) {
            // Iterar sobre cada elemento de point
            for (let l = 0; l < point.length; l++) {
                // Combinar los elementos actuales de cada arreglo
                var GenerarPagina = pronoun[i] + adj[j] + noun[k] + point[l];

                // Mostrar el resultado en la consola
                console.log('Domain Name Generator: ' + GenerarPagina);
            }
        }
    }
}

