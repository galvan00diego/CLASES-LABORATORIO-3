/*3. Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro.*/
function CadenaRepetida(cantidad, cadena) {
    var cadenaF = "";
    if (cadena != null) {
        for (var index = 0; index < cantidad; index++) {
            // console.log(cadena);
            cadenaF += cadena + "\n";
        }
    }
    else {
        return -cantidad;
    }
    return cadenaF;
}
console.log(CadenaRepetida(4, "CadenaRepetida"));
console.log(CadenaRepetida(3));
