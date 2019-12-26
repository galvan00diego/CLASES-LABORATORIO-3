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
var Entidades;
(function (Entidades) {
    var Ropa = /** @class */ (function () {
        function Ropa(codigo, nombre, precio) {
            this.codigo = codigo;
            this.nombre = nombre;
            this.precio = precio;
        }
        Ropa.prototype.ropaToString = function () {
            return "\"codigo\":" + this.codigo + ",\"nombre\":\"" + this.nombre + "\",\"precio\":" + this.precio;
        };
        return Ropa;
    }());
    Entidades.Ropa = Ropa;
    var Campera = /** @class */ (function (_super) {
        __extends(Campera, _super);
        function Campera(codigo, nombre, precio, talle, color) {
            var _this = _super.call(this, codigo, nombre, precio) || this;
            _this.talle = talle;
            _this.color = color;
            return _this;
        }
        Campera.prototype.ToJSON = function () {
            var retorno = "{" + this.ropaToString() + ",\"talle\":\"" + this.talle + "\",\"color\":\"" + this.color + "\"}";
            return JSON.parse(retorno);
        };
        return Campera;
    }(Ropa));
    Entidades.Campera = Campera;
})(Entidades || (Entidades = {}));
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
var Test;
(function (Test) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AgregarCampera = function () {
            //Manejadora.AdministrarSpinner(true);
            var codigo = $("#txtCodigo").val();
            var nombre = $("#txtNombre").val();
            var precio = $("#txtPrecio").val();
            var talle = $("#txtTalle").val();
            var color = $("#cboColores").val();
            //let foto:any=(<HTMLInputElement>document.getElementById("foto"));
            var form = new FormData();
            var miCampera = new Entidades.Campera(codigo, nombre, precio, talle, color);
            form.append("caso", "agregar");
            //form.append("foto",foto.files[0]);
            form.append("cadenaJson", JSON.stringify(miCampera.ToJSON()));
            $.ajax({
                type: 'POST',
                url: "./BACKEND/Administrar.php",
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form,
                async: true
            })
                .done(function (resultado) {
                //Manejadora.AdministrarSpinner(false);
                console.log(resultado);
                //Manejadora.VaciarForm();
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.MostrarCamperas = function () {
            //Manejadora.AdministrarSpinner(true);
            $.ajax({
                type: 'POST',
                url: "./BACKEND/administrar.php",
                dataType: "text",
                data: "caso=mostrar",
                async: true
            })
                .done(function (resultado) {
                //Manejadora.AdministrarSpinner(false);
                var jsonMuestro = JSON.parse(resultado);
                var tabla = "<table border=5><tr><td>CODIGO</td><td>NOMBRE</td><td>PRECIO</td><td>TALLE</td><td>COLOR</td><td>ACCIONES</td></tr>";
                for (var i = 0; i < jsonMuestro.length; i++) {
                    tabla += "<tr><td>" + jsonMuestro[i].codigo + "</td><td>" + jsonMuestro[i].nombre + "</td><td>" + jsonMuestro[i].precio + "</td><td>" + jsonMuestro[i].talle + ("</td><td>" + jsonMuestro[i].color + "</td>");
                    tabla += "<td><input type=\"button\" value=\"Eliminar\" onclick='Test.Manejadora.EliminarCampera(" + JSON.stringify(jsonMuestro[i]) + ")'>";
                    tabla += "<input type=\"button\" value=\"Modificar\" onclick='Test.Manejadora.ModificarCampera(" + JSON.stringify(jsonMuestro[i]) + ")'></td></tr>";
                }
                tabla += "</table>";
                $("#divTabla").html(tabla);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.EliminarCampera = function (obj) {
            if (confirm("Desea eliminar codigo:" + obj.codigo + ", talle:" + obj.talle)) {
                //console.log(JSON.stringify(obj));
                $.ajax({
                    type: 'POST',
                    url: "./BACKEND/administrar.php",
                    dataType: "text",
                    data: "caso=eliminar&cadenaJson=" + JSON.stringify(obj),
                    async: true
                })
                    .done(function (resultado) {
                    console.log(resultado);
                    Manejadora.MostrarCamperas();
                })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
                });
            }
        };
        Manejadora.ModificarCampera = function (obj) {
            console.log(obj);
            $("#txtCodigo").val(obj.codigo);
            $("#txtCodigo").prop("disabled", true);
            $("#txtNombre").val(obj.nombre);
            $("#txtPrecio").val(obj.precio);
            $("#txtTalle").val(obj.talle);
            $("#cboColores").val(obj.color);
            //$("#imgFoto").attr("src","./BACKEND/fotos/"+obj.pathFoto);
            $("#btn-agregar").val("Modificar");
            $("#btn-agregar").prop("onclick", null).off("click");
            $("#btn-agregar").click(function () {
                //Manejadora.AdministrarSpinner(true);
                var codigo = $("#txtCodigo").val();
                var nombre = $("#txtNombre").val();
                var precio = $("#txtPrecio").val();
                var talle = $("#txtTalle").val();
                var color = $("#cboColores").val();
                //let foto:any=(<HTMLInputElement>document.getElementById("foto"));
                var form = new FormData();
                var miCampera = new Entidades.Campera(codigo, nombre, precio, talle, color);
                //form.append("foto",foto.files[0]);    
                form.append("cadenaJson", JSON.stringify(miCampera.ToJSON()));
                form.append("caso", "modificar");
                $.ajax({
                    type: 'POST',
                    url: "./BACKEND/Administrar.php",
                    dataType: "text",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form,
                    async: true
                })
                    .done(function (resultado) {
                    //Manejadora.AdministrarSpinner(false);
                    console.log(resultado);
                    var objRetorno = JSON.parse(resultado);
                    if (objRetorno.TodoOK) {
                        //Manejadora.VaciarForm();
                        Manejadora.MostrarCamperas();
                    }
                })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
                });
            });
        };
        return Manejadora;
    }());
    Test.Manejadora = Manejadora;
})(Test || (Test = {}));
