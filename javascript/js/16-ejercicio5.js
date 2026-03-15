'use strict'

//muestra todos los numeros divisores en un prompt

do 
{
    var numero1 = parseInt(prompt('Introduce un numero',0));
    console.log(numero1);
    

} while (isNaN(numero1));

document.write("<h1>Los numeros divisibles de "+ numero1 +" son:</h1>")

for(var i = 0; i<numero1; i++)
{
    if (numero1 % i==0) 
    {
        document.write("<br>"+i+"</br>");
    }
}
    