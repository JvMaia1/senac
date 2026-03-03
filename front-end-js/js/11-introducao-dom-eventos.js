'use strict'

console.log('Dom e eventos');

//selecionando os elementos
const bBotaoSoma = document.querySelector('#somar');
const pValor = document .querySelector('#valor');
const bBotaoSubtrair = document.querySelector('#subtrair');

let contador = 0;


//Função para checar valor do contador pra nao ficar negativo
function checarValor (contador){
    if (contador <= 0){
        bBotaoSubtrair.disabled = true;
    } else if (contador >= 5){
        bBotaoSoma.disabled = true;
    } else {
        bBotaoSubtrair.disabled = false, bBotaoSoma.disabled = false
    };
    
};

checarValor(contador);

//Monitorando o evento de click nos botões e alterando o valor
bBotaoSoma.addEventListener('click', function(){
    contador ++;
    pValor.textContent = contador;
    checarValor(contador);
    
});

bBotaoSubtrair.addEventListener('click', function(){
    contador --;
    pValor.textContent = contador;
    checarValor(contador);
    
});

//Fazendo com que o texto possa sumir ou aparecer dependendo do estado atual

const pTextoQueSome = document.querySelector('#textoQueSome');
const bMostrarEsconder = document.querySelector('#mostrarOuEsconder');

bMostrarEsconder.addEventListener('click', function(){
    pTextoQueSome.classList.toggle('oculto'); 

    if(pTextoQueSome.classList.contains('oculto')){
        bMostrarEsconder.textContent = 'Mostrar';
    
    } else bMostrarEsconder.textContent = 'Esconder';

});



