'use strict'

/* utilizar un bucle para calcular la suma y la media de los numeros introducidos
 hasta introducir un numero negativo y ahi mostrar el resultado*/

 var suma=0;
 var contador=0;
 var media=0;


 do 
 {
    var numero= parseInt(prompt("Introduce numeros hasta que introduzcas uno negativo",0));

    if (isNaN(numero)) 
    {
        numero = 0;
    
    }
    else if(numero>=0)
    {
        suma=suma + numero;
        contador++;
    }
    
 } while (numero>=0);

 media = suma/contador;
 console.log("La suma es igual a "+ suma+", y la media es igual a "+ media);
 