const obtenerInformacion = (materia)=>{
           materias = {
            fisica: ["perez","pedro", "pepito","cofla","maria"],
            programacion:["leon","pedro", "juan","pepito"],
            logica: ["hernandez","pedro", "pepito","cofla","maria"],
            quimica: ["rodriguez","pedro", "pepito","cofla","maria"],
           }
           if(materias[materia] !== undefined){
            return [materias[materia],materia,materias]
           }else{
            return materias;
           }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
if(informacion !== false){
   let profesor =  informacion[0][0]
   let alumnos =  informacion[0];
   alumnos.shift()

      document.write(`el profesor de materia ${informacion[1]} es: ${profesor}<br> los alumnos son ${alumnos}`);
}

}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        document.write(info)
       if (informacion[info].includes(alumno)){
        cantidadTotal++
        clasesPresentes.push(" " + info);
       } 
    }
    return `<br><b style='color:blue'> ${alumno}</b> esta en<b> ${cantidadTotal} clases </b><br>esta cursando las clases: <b>${clasesPresentes}</b>`
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(cantidadDeClases("cofla"))



