class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
   
     instalar(){
        if(this.instalada == false){
           this.instalada = true;
           alert("aplicacion instalda");
        }
     }
     abrir(){
        if(this.iniciada == false && this.instalada == true){
           this.iniciada = true;
           alert("app iniciada");
        }
     }
     cerrar(){
       if(this.iniciada == true&& this.instalada == true){
          this.iniciada = false;
          alert("app cerrada");
       }
    }
     Desinstalar(){
        if(this.instalada == true){
           this.instalada = false;
           alert("aplicacion desinstalda");
        }
     }
   appInfo(){
    return `
    descargas:${this.descargas}<br>
    puntuacion:${this.puntuacion}<br>
    peso:${this.peso}<br>
    `
   }
}

app = new App ("10.000","5 estrellas","700mb");
app2 = new App ("9.000","2 estrellas","300mb");
app3 = new App ("7.000","1 estrellas","400mb");
app4 = new App ("20.000","4 estrellas","100mb");
app5 = new App ("30.000","4 estrellas","200mb");
app6 = new App ("50.000","3 estrellas","400mb");
app7 = new App ("1.000","8 estrellas","500mb");



document.write(
    `
    ${app.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
    `
)



