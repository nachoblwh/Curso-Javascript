'use strict'

//programa que pida dos numeros y q nos diga cual es el mayor cual es el menor y si son iguales
//plus si los numeros no son numeros o son menores o iguales a 0 volver a pedir los numeros 

do 
{
    var numero1 = parseInt(prompt('Introduce un numero'));
    console.log(numero1);
    
    var numero2 = parseInt(prompt('Introduce otro numero'));
    console.log(numero2);

} while (numero1<=0 || numero2 <= 0);
    

if (numero1 > numero2) 
    {  
        console.log('El primer numero es mayor que el segundo numero');
    }
        
    else if (numero2 > numero1) 
    {
        console.log('El segundo numero es mayor que el primero');
    } 
        
    else if (numero2 == numero1) 
    {
        console.log('los numeros son del mismo valor');
    }        
    






