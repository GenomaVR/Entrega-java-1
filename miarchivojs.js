function sacarTurno()
{
    let turno = 1;
    let respuesta = "s"
    
    for(turno = 1; turno < 100; turno++){

        let nombre = prompt("Hola, para sacar un turno favor de indicar su nombre y apellido");
        let edad = parseInt(prompt("Ahora indique su edad"));
        let dni = parseInt(prompt("Por ultimo favor de indicar su dni sin puntos ni espacios"));

        alert("Tus datos ingresados son. NOMBRE: "+nombre+" EDAD: "+edad+" DNI: "+dni);

        let confirmacion = prompt("Los datos ingresados son correctos? favor de ingresar si / no");

        while(confirmacion !== "si")
        {
            if(confirmacion == "si")
            {
            alert("Perfecto ahora se le brindara un turno")
            }
            else(confirmacion == "no")
            {
            alert("favor de ingresar los datos nuevamente")
            let nombre = prompt("Re ingrese su nombre");
            let edad = parseInt(prompt("Re ingrese su edad"));
            let dni = parseInt(prompt("Re ingrese su DNI"));
            }
            confirmacion = prompt("Los datos ingresados son correctos? favor de ingresar si / no");
        }

        alert("Hola " +nombre+ " tu turno es el " +turno+ " y tu tiempo de espera es de 10 minutos")

        console.log("El turno es "+turno+" El nombre ingresado es "+nombre+" su edad es "+edad+" y el dni es "+dni)

        let respuesta=prompt("Quiere sacar otro turno?, escriba (s), sino escriba salir");

        if (respuesta !=="s"){
            break
        }
        
        
    }

}

/* class Turno1{
    constructor(nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni
    }
    hablar(){
        alert("hola"+ this.nombre," tu turno es el: ")
    }
} 
*/