import peliculas from './peliculas.js'
console.log(peliculas); 

let contenedorAccion = document.getElementById("genero-28");
let contenedorThriller = document.getElementById("genero-53");
let contenedorAventura = document.getElementById("genero-12");

// Función que crea una tarjeta de película

function crearTarjeta(pelicula) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("pelicula");

  let imagen = document.createElement("img"); 
  imagen.src = "https://image.tmdb.org/t/p/w200" + pelicula.poster_path;
  imagen.alt = pelicula.title;

  let titulo = document.createElement("p"); 
  titulo.textContent = pelicula.title;

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(titulo);

  return tarjeta;
}

// Recorrer las películas

for (let i = 0; i < peliculas.length; i++) {
  let peli = peliculas[i]; 

  if (peli.genre_ids.includes(28)) {
    let tarjeta = crearTarjeta(peli);
    contenedorAccion.appendChild(tarjeta);
  }

  if (peli.genre_ids.includes(53)) {
    let tarjeta = crearTarjeta(peli);
    contenedorThriller.appendChild(tarjeta);
  }

  if (peli.genre_ids.includes(12)) {
    let tarjeta = crearTarjeta(peli);
    contenedorAventura.appendChild(tarjeta);
  }
}
