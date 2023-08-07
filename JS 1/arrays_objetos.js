//Uso de arrays con objetos en su interior.
var articulos = 
[
    { nombre: "Bicicleta", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
]

//metodo filter para filtrar y validad si algo es cierto o falso.

//Ejemplo de filter
var articulosFiltrados = articulos.filter(function(articulo)
{
    return articulo.costo <= 500;
});

//metodo de map encargado de mapear algunos articulos.

//Ejemplo de map 
var nombreArticulos = articulos.map(function(articulo)
{
    return articulo.nombre;
});

//metodo find valida un true o un false observando si un objeto existe o no dentro 
//del array.

//Ejemplo de find.
var encuentraArticulo = articulos.find(function(articulo)
{
    return articulo.nombre === "Laptop";
});


//metodo forEach, este se encarga del filtrado de un array sin modificarlo.

//ejemplo
articulos.forEach(function(articulo)
{
    console.log(articulo.nombre);
});

//metodo some, some se encarga de retornar una validacion de verdadero o falso para 
//articulos que cumplan la condicion
var articulosBaratos = articulos.some(function(articulo)
{
    return articulo.costo <= 700;
});
