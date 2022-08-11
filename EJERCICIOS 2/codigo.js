class Celular{
    constructor(color,peso,tamano,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = tamano;
        this.resolucionDeCamara = rdc;
        this.memorioRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            encendido = true;
        }else{
            alert("el celular ya esta apagado")
            this.encendido = false;
        }
    }  
        
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciandose celular")
        } else {
            alert("celular apagado")
        }
    } 
   
    tomarFotos(){
        alert(`foto tomada en una resulcion de: ${this.resolucionDeCamara}`)
    }

    grabarVideos(){
        alert(`grabando video en resolucion: ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
         Color:<b>${this.color}</b><br>
         Peso:<b>${this.peso}</b><br>
         Tamaño:<b>${this.resolucionDePantalla}</b><br>
         Resolucion de video:<b>${this.resolucionDeCamara}</b><br>
         Memoria ram:<b>${this.memorioRam}</b><br>
        `;
    }
    }

/*celular1 = new Celular("rojo","150g","5'","hd","1gb");
celular2 = new Celular("negro","155g","5'.4","full hd","2gb");
celular3 = new Celular("blanco","150g","5.9'","full hd","2gb"); */

/*celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.reiniciar();
celular1.apagar();*/

class celuarAltaGama extends Celular{
    constructor(color,peso,tamano,rdc,ram,rcde){
        super(color,peso,tamano,rdc,ram);
        this.resolucionDeCamaraExtra = rcde;

        }

        grabarVideosLento(){
            alert("estas grabando en camara lenta");
        }

        reconocimientoFacial(){
            alert("iciando reconocimiento facial");
        }   
        
        InfoAltaGama(){
            return this.mobileInfo() + `resolucion de camara extra ${this.resolucionDeCamaraExtra}`
        }
    }

    celular1 = new celuarAltaGama("rojo","150g","5.2'","4k","8gb","full hd");
    celular2 = new celuarAltaGama("rojo","170g","6'","4k","8gb","full hd");


document.write(`
${celular1.InfoAltaGama()}<br><br>
${celular2.InfoAltaGama()}<br>
`);


























