///<reference path="../node_modules/@types/jquery/index.d.ts"/>
namespace Test
{
    export class Manejadora
    {
        public static AgregarCampera():void
        {
            //Manejadora.AdministrarSpinner(true);
            let codigo:any=$("#txtCodigo").val();
            let nombre:any=$("#txtNombre").val();
            let precio:any=$("#txtPrecio").val();
            let talle:any=$("#txtTalle").val();
            let color:any=$("#cboColores").val();
            //let foto:any=(<HTMLInputElement>document.getElementById("foto"));
            let form:FormData=new FormData();
            let miCampera:Entidades.Campera=new Entidades.Campera(codigo,nombre,precio,talle,color);
            form.append("caso","agregar");
            //form.append("foto",foto.files[0]);
            form.append("cadenaJson",JSON.stringify(miCampera.ToJSON()));
            
            $.ajax({
                type: 'POST',
                url: "./BACKEND/Administrar.php",
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data:form,
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
        
        }

        public static MostrarCamperas():void
        {
            //Manejadora.AdministrarSpinner(true);
            $.ajax({
                type: 'POST',
                url: "./BACKEND/administrar.php",
                dataType: "text",
                data:"caso=mostrar",
                async: true
            })
            .done(function (resultado) {
                //Manejadora.AdministrarSpinner(false);
                let jsonMuestro:any[]=JSON.parse(resultado);
                let tabla:string=`<table border=5><tr><td>CODIGO</td><td>NOMBRE</td><td>PRECIO</td><td>TALLE</td><td>COLOR</td><td>ACCIONES</td></tr>`;
                for(var i=0;i<jsonMuestro.length;i++)
            {
                tabla+="<tr><td>"+jsonMuestro[i].codigo+"</td><td>"+jsonMuestro[i].nombre+"</td><td>"+jsonMuestro[i].precio+"</td><td>"+jsonMuestro[i].talle+`</td><td>${jsonMuestro[i].color}</td>`;
                tabla+=`<td><input type="button" value="Eliminar" onclick='Test.Manejadora.EliminarCampera(${JSON.stringify(jsonMuestro[i])})'>`;
                tabla+=`<input type="button" value="Modificar" onclick='Test.Manejadora.ModificarCampera(${JSON.stringify(jsonMuestro[i])})'></td></tr>`;
            }
            tabla+="</table>";
            $("#divTabla").html(tabla);
           
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });    
        }

        public static EliminarCampera(obj:any):void
        {
            
                if(confirm("Desea eliminar codigo:"+obj.codigo+", talle:"+obj.talle))
              {
            //console.log(JSON.stringify(obj));
            $.ajax({
                type: 'POST',
                url: "./BACKEND/administrar.php",
                dataType: "text",
                data:"caso=eliminar&cadenaJson="+JSON.stringify(obj),
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
        }

        public static ModificarCampera(obj:any):void
        {
            
            console.log(obj);
            $("#txtCodigo").val(obj.codigo);
            $("#txtCodigo").prop("disabled",true);
            
            $("#txtNombre").val(obj.nombre);
            $("#txtPrecio").val(obj.precio);
            $("#txtTalle").val(obj.talle);
            $("#cboColores").val(obj.color);
            //$("#imgFoto").attr("src","./BACKEND/fotos/"+obj.pathFoto);

            $("#btn-agregar").val("Modificar");
            $("#btn-agregar").prop("onclick", null).off("click");

            $("#btn-agregar").click(function(){
                //Manejadora.AdministrarSpinner(true);
                let codigo:any=$("#txtCodigo").val();
            let nombre:any=$("#txtNombre").val();
            let precio:any=$("#txtPrecio").val();
            let talle:any=$("#txtTalle").val();
            let color:any=$("#cboColores").val();
            //let foto:any=(<HTMLInputElement>document.getElementById("foto"));
            let form:FormData=new FormData();
           
                let miCampera:Entidades.Campera=new Entidades.Campera(codigo,nombre,precio,talle,color);
                //form.append("foto",foto.files[0]);    
                form.append("cadenaJson",JSON.stringify(miCampera.ToJSON()));    

            form.append("caso","modificar");
            
            
            
            $.ajax({
                type: 'POST',
                url: "./BACKEND/administrar.php",
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data:form,
                async: true
            })
            .done(function (resultado) {
                //Manejadora.AdministrarSpinner(false);
                console.log(resultado);
                let objRetorno:any=JSON.parse(resultado);
                if(objRetorno.TodoOK)
                {
                    //Manejadora.VaciarForm();
                    Manejadora.MostrarCamperas();
                }
                
           
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });    

            });
            
        }
    }
}