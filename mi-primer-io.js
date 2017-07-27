var fs = require('fs');  //pista!!!  filesystem viene en node; el módulo require es parte de common.js, que a su vez es parte de node.js; similar al @import

var numeroLineas = fs.readFileSync(process.argv[2]); //readFileSyn devuelve un Buffer, que tiene q pasarse a cadena de texto despuès

console.log(numeroLineas.toString().split('\n').length - 1);  //.toString pasa a string lo que devuelve como Buffer en binario; .split para convertir un string de Js en un array de substrings; '\n' es un delimitador de saltos de lìneas; se le resta 1 al largo del array para que no nos dé un elemento extra al final de la última línea, ya que no hay salto de línea ahí

var fs = require('fs');

/*var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1     SOLUCION QUE ENTREGA LEARNYOUCODE*/