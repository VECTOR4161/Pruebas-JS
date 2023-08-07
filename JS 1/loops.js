var estudiantes = ["Fernando", "Luis", "Santiago"];

function saludarEstudiantes(estudiante)
{
    console.log(`Hola, ${estudiante}`);
}


//uso de los loops

//for convencional:
for(var i = 0; i < estudiantes.length; i++)
{
    saludarEstudiantes(estudiantes[i]);
}

//El equivalente de foreach dentro de javascript.
for(var estudiante of estudiantes)
{
    saludarEstudiantes(estudiante);
}