'use strict'

//hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario

do 
{
    var numero1 = parseInt(prompt('Introduce un numero',0));
    console.log(numero1);
    
    var numero2 = parseInt(prompt('Introduce otro numero',0));
    console.log(numero2);

} while (isNaN(numero1) || isNaN(numero2));

document.write('<h1> De numero '+ +numero1+' a numero '+ numero2+' hay los siguientes numeros:<h1>');

if (numero1 < numero2) 
{
    for (var cont = numero1; cont <= numero2; cont++) 
        {   
            document.write('<br>'+cont);
        }

} 

else if(numero1 > numero2)
{
    for (var cont = numero1; cont >= numero2; cont--) 
        {   
            document.write('<br>'+cont);
        }
}
else{
    document.write('<br>'+numero1+'</br>');
}
