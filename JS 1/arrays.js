//Uso de array.

//declaracion de un array
var frutas = ["manzana","pera","uva"];
console.log(frutas);

//metodos para el uso de arrays:

//adicionar un valor al array:
var masFrutas = frutas.push("cereza");

//retirar un elemento del array:
var ultimo = frutas.pop("cereza");

//agregar el elemento sin embargo lo coloca al inicio del array.
var nuevaLongitud = frutas.unshift("platano");

//eliminar el elemento del array, la diferencia con pop es eliminar al inicio.
var borrarFruta = frutas.shift("platano");

//obtener la posicion del primer elemento que coincida en el array:
var posicion = frutas.indexOf("platano");