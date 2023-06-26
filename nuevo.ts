interface Nuevo {
      uid: string;
      provider: string[];
}

class Persona {
    nombre:string;
     edad:number;

    constructor(nombre, edad){
     this.nombre=nombre;
     this.edad=edad;
    }
}