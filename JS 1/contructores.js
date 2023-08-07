//objeto miAuto
var miAuto = 
{
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2010,

    //declaracion de funciones dentro del objeto
    detalleDelAuto: function()
    {
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
}

//uso de funciones contructoras.
function auto(marca,modelo,anio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

//
var autoNuevo = new auto("BMW","Cualquiera","2018");
