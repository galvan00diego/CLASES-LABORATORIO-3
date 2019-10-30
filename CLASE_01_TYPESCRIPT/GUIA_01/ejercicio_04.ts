/*4. Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar , siendo 5 el número recibido como parámetro.*/

function ParOImpar(numero:number):string{
  var retorno:string="";
  if(numero%2==0)
  {
    retorno=`El numero ${numero} es par`;
  }
  else
  {
    retorno=`El numero ${numero} es impar`;
  }
  return retorno;
}

console.log(ParOImpar(4));
console.log(ParOImpar(25));
