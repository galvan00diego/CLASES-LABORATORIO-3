
function Enviar():void
{
  let nombre:string=(<HTMLInputElement>document.getElementById("txtNombre")).value;
  let edad:string=(<HTMLInputElement>document.getElementById("txtEdad")).value;

  alert(`Hola ${nombre}, tienes ${edad} años`);
  console.log(`Hola ${nombre}, tienes ${edad} años`);
  (<HTMLDivElement>document.getElementById("divTxt")).innerHTML=`Hola ${nombre}, tienes ${edad} años`;
}
