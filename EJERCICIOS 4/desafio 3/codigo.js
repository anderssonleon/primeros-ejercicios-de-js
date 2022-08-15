
    let materias = {
     fisica: ["perez","pedro", "pepito","cofla","maria"],
     programacion:["leon","pedro", "juan","pepito"],
     logica: ["hernandez","pedro", "pepito","cofla","maria"],
     quimica: ["rodriguez","pedro", "pepito","cofla","maria"],
    }

     const inscribir = (alumno,materia)=>{
        personas = materias[materia];
        if (alumno.length >= 3) {
            document.write(`lo siento alumno <b>${alumno}</b> las clases de <b>${materia}</b> ya estan llenas`)
            
        }else {
            personas.push(alumno);
            if (materia == "fisica") {
                materias = {
                    fisica:personas,
                    programacion:materias['programacion'],
                    logica: materias['logica'],
                    quimica: materias['quimica'],
                   }
            } 
            else if (materia == "programacion") {
                materias = {
                    fisica:materias['fisica'],
                    programacion:personas,
                    logica: materias['logica'],
                    quimica: materias['quimica'],
                   }
            } 
            else if (materia == "logica") {
                materias ={
                    fisica:materias['fisica'],
                    programacion:materias['programacion'],
                    logica: personas,
                    quimica: materias['quimica'],
                   }
            } 
            else if (materia == "quimica") {
                materias = {
                    fisica:materias['fisica'],
                    programacion:materias['programacion'],
                    logica:materias['logica'],
                    quimica:personas,
                   }
            } 
          document.write(`feliciadades personas ${alumno}! te has inscrito a ${materia}`)
        }
     }
  document.write(materias['fisica'] + "<br>")

     inscribir("pedroo","fisica")

document.write("<br>" + materias['fisica'])