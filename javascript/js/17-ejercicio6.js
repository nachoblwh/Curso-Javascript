'use strict'

function saludo() 
{
    return 'hola soy nacho';
}

function calcula(numero1, numero2, mostrar=false) 
{
    if (mostrar==false) 
    {
        console.log('suma: '+ (numero1+numero2));
    }
    else
    {
        document.write('suma: '+ (numero1+numero2));
    }
    
        
}

var x=confirm('elige si lo muestro en pantalla o en consola');

if (x) 
    {
        calcula(2,2,true);
    }
    else
    {
        calcula(2,2);
    }