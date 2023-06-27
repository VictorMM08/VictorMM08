class Alumno{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }   
    
    set setNombre(nombre:string){
        this.nombre=nombre;
    }
    get getNombre():string{
        return this.nombre;
    }
}


 
 let persona1 = new Alumno("Victor",23);

 console.log(persona1.getNombre);