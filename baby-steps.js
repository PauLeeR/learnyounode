var number = 0;  //partimos de 0, después con un for iremos iterando números de 1 en 1
for (i = 2; i < process.argv.length; i++){ //aquí està el loop con el objeto global process y su propiedad argv(que devuelve un array); se debe comenzar en el tercer elemento de la lista (índice 2), por lo que nos saltamos los primeros dos
	number = number + Number(process.argv[i]); //"Number" convierte los argumentos que vienen en forma de string a número
}
console.log(number);