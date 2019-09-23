/*2. Cree una aplicación que muestre, a través de un Array , los nombres de los meses de un
año y el número al que ese mes corresponde. Utilizar una estructura repetitiva para
escribir en la consola ( console.log() */

var Meses:string[]=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for (let index = 0; index < Meses.length; index++) {
  const element = Meses[index];
  console.log(`${index+1} - ${element}`);
}
