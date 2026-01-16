'use strict'

var numero = 12;

if (numero !== '12') 
{
    console.log('pasa');
}
else
{
    console.log('no pasa');
}

//DIFERENCIAS CON LET Y VAR

var numero = 40;
console.log(numero);


if (true) 
{
    var numero = 50;
    console.log(numero);  
}

console.log(numero);

//prueba con let
var texto='curso js';

console.log(texto);

if (true) 
{
    let texto= 'Master de desarrollo web';
    console.log(texto);
}

console.log(texto);

/*
La diferencia es que con var definimos la variable globalmente y con let 
definimos la variable a nivel de bloque
*/


