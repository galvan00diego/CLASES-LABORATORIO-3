"use strict";
var NPersona;
(function (NPersona) {
    var Persona = /** @class */ (function () {
        function Persona(apellido, dni, nombre, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "Apellido", {
            get: function () { return this._apellido; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Dni", {
            get: function () { return this._dni; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () { return this._nombre; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Sexo", {
            get: function () { return this._sexo; },
            enumerable: true,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this.Nombre + "-" + this.Apellido + "-" + this.Dni + "-" + this.Sexo;
        };
        return Persona;
    }());
    NPersona.Persona = Persona;
})(NPersona || (NPersona = {}));
//# sourceMappingURL=Persona.js.map