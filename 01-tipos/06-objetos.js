// Personaje de TV

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",  //el nombre seria llamado una propiedad o llave-valor
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13; // esto sirve para cambiar el valor de la propiedad

let llave = "edad";
personaje[llave] = 16;

delete personaje.anime; // esto sirve para eliminar una propiedad

console.log(personaje);