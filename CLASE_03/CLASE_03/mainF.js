var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/// <reference path="./Persona.ts"/>
var NPersona;
(function (NPersona) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, apellido, dni, nombre, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Object.defineProperty(Empleado.prototype, "Legajo", {
            get: function () { return this._legajo; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Empleado.prototype, "Sueldo", {
            get: function () { return this._sueldo; },
            enumerable: true,
            configurable: true
        });
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado " + this.Nombre + (" habla " + idioma);
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + "-" + this.Legajo + "-" + this.Sueldo;
        };
        return Empleado;
    }(NPersona.Persona));
    NPersona.Empleado = Empleado;
})(NPersona || (NPersona = {}));
/// <reference path="./Empleado.ts"/>
var empleado1 = new NPersona.Empleado("jorge", "fernandez", 132456, "M", 1123, 15500);
console.log(empleado1.ToString());
console.log(empleado1.Hablar("español"));
console.log(empleado1.Apellido);
