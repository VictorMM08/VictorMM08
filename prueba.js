var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Object.defineProperty(Alumno.prototype, "setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alumno.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Alumno;
}());
var persona1 = new Alumno("Victor", 23);
console.log(persona1.getNombre);
