let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];


for ( i =0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)),0];
}
 const tomarAsistencia = (nombre,p)=>{
      let presencia = prompt(nombre);  
    if ( presencia == "P" || presencia == "p"){
        alumnosTotales[p][1]++;
    }
    }

for ( i = 0; i < 30; i++){
    for( alumnos in alumnosTotales)[
         tomarAsistencia(alumnosTotales [alumnos][0],alumnos)
    ]
}


for (alumnos in alumnosTotales) {
    let resultados = `${alumnosTotales[alumnos][0]}:<br>
    ____Presencia:${alumnosTotales[alumnos][1]}
    ____ausencias:${30 - parseInt(alumnosTotales[alumnos][1])} `

    if (30 - alumnosTotales[alumnos][1] > 18) {     
        resultados+="REPROBADO POR INASISTENCIAS"  
    } else{
        resultados+="<br><br>"
        document.write(resultados)
    }
}
