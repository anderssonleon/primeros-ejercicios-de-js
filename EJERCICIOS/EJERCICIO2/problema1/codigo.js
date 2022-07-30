

let free = false;

const validarClientes = (time)=>{
    let edad = prompt("cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis por que sos la primera persona despues de las 2 am"); 
            free = true;
        } else {
            alert(`son las ${time}:00hrs tenes que pagar entrada`)
            
        }

    } else {
        alert("no tienes edad suficiente a la casa!");
    }
}



validarClientes(4);
