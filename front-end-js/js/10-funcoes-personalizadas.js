'use strict'

//console.log('teste');

//Aprendendo a usar funçoes personalizadas

//função anonima, criada associada a uma constante

const exemplo1 = function(){
    console.log('Olá, sou uma função anonima');
    
};

exemplo1();

//outra sintaxe possivel, funçao nomeada, criada de forma livre

function exemplo2(){
    console.log('Olá, sou uma função declarada/nomeada');
    
};

exemplo2();

//outra sintaxe possivel, 'arrow function'

const exemplo3 = () => {
    console.log('Olá, sou uma arrow function');
    
};

exemplo3();
