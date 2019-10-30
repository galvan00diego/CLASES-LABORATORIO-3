if(localStorage.getItem("Empleados")==null)
{
localStorage.setItem("Empleados","Juan-123,rosa-456,carlos-666");
}


function Loguear():void{
  let nombre:string=(<HTMLInputElement>document.getElementById("txtNombre")).value;
  let legajo:string=(<HTMLInputElement>document.getElementById("txtLegajo")).value;

let stremp:any=localStorage.getItem("Empleados");
let empleados:string[]=stremp.split(",");
let empleadosT:string[]=[""];
for (let index = 0; index < empleados.length; index++) {
  
  if((nombre+"-"+legajo)==empleados[index])
  {
    console.log(`Bienvenido ${nombre}, ingresaste correctamente`);
    alert(`Bienvenido ${nombre}, ingresaste correctamente`);
    window.location.href="principal.html";
    break;
  }
  else
  {
    console.log(`${nombre} no estas registrado, registrate!!`);
    alert(`${nombre} no estas registrado, registrate!!`);
    window.location.href=("Registro.html");
    break;
  }
  
}

}

