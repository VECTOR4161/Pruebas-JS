//uso de objetos

//generar un objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2010,

    //declaracion de funciones dentro del objeto
    detalleDelAuto: function()
    {
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
}

//Acceder a una de las propiedades dentro del objeto mediante el uso del "."  .
miAuto.marca;


//llamar funciones dentro del metodo
miAuto.detalleDelAuto();

//Uso de contructores
