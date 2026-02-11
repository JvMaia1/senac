'use strict'

console.log('Teste');

/* Operadores relacionais
< Menor
> Maior
<= Menor ou igual
>= Maior ou igual
!= Diferença por valor
!== Diferença por valor e tipo
== Igual por valor
=== Igual por mvalor e tipo

*/

let media;
let a = 10;
let b = '10';
let c = a > b;
let d = a == b; 
let e = a === b;

console.log(c);
console.log(d);
console.log(e);

console.log('\n---------------------\nExemplo 1: Simples');

/* condicional if (se) */

let numero = 50;

if(numero >= 20){
    console.log('A variavel numero é maior ou igual a 20');

    
}

//Podemos omitir {} para instrução simples

if(numero < 100) console.log('A variavel numero é menor que 100');

console.log('\n---------------------\nExemplo 2: composto (if/else - se/senão)');

//Logica 2: Checando se o aluno é maior de idade
//criando objeto para aluno
let aluno ={
    nome: 'Steve Harris',
    idade: 4000,
    nota1: 4.73,
    nota2: 9.28,
    media: undefined,
    maiorIdade: undefined,
    desempenho: undefined,
    situacao: undefined
}


if(aluno.idade >= 18 ){
    aluno.maiorIdade = 'maior de idade';
    
}

console.log(`O aluno ${aluno.nome} é ${aluno.maiorIdade}`);


console.log('\n---------------------\nExercicio 2 e 3: Media de nota e situação do aluno');

/*Funçoes para checar a media, desempenho e situação do aluno, e função para criar relatorio baseado nos resultados
 contexto: determinar o desemnho do aluno baseado na media que teve

> 9 = otimo
> 7 = bom
> 5 = ruim
=< 5 = pessimo

> 7 aprovado
< 7 reprovado

*/

function calculoMedia(nota1,nota2){
    media = ((nota1 + nota2) / 2).toFixed(2);
    return media
}

function checarDesempenho(){

    if(aluno.media > 9){
        aluno.desempenho = 'Otimo'

    }else if(aluno.media > 7){
        aluno.desempenho = 'Bom'

    }else if(aluno.media > 5){
        aluno.desempenho = 'Ruim'
    }else
        aluno.desempenho = 'Pessimo';

}

function checarSituacao(aluno){
   aluno.situacao = media > 7 ? 'Aprovado' : 'Reprovado'
}

function relatorioAluno(aluno){
aluno.media = calculoMedia(aluno.nota1, aluno.nota2)
checarDesempenho(aluno)
checarSituacao(aluno)

console.log(`O desempenho do aluno ${aluno.nome} foi ${aluno.desempenho} com ${aluno.media} e ele esta ${aluno.situacao}`);
}

relatorioAluno(aluno)

console.log('\n---------------------\nExercicio 4: Estoque condicional');

let nivelEstoque;
let quantidadeEstoque = 0;

if(quantidadeEstoque > 10){
    nivelEstoque = 'Normal';
}else if(quantidadeEstoque == 0){
    nivelEstoque = 'Critico';
}else 
    nivelEstoque = 'Baixo';

console.log(`O estoque tem ${quantidadeEstoque} unidades, ou seja o estoque esta ${nivelEstoque}`);

console.log('\n---------------------\nExercicio 5:');

let valorCompra = 10; // valor da compra antes do desconto
let percentualValorFinal; // valor percentual total do valor descontado
let desconto; // percentual do desconto
let valorFinal; // valor final descontado
let valorParaDesconto; // valor que faltaria para o proximo patamar de desconto
let para20DeDesconto = 300, para10DeDesconto = 100;


//função que calcula e retorna o valor descontado
function aplicarDesconto(para20DeDesconto,para10DeDesconto,valor){
    if (valor > para20DeDesconto){
        percentualValorFinal = 0.8;// 80% do valor total
        
    }else if (valor > para10DeDesconto){
        percentualValorFinal = 0.9;// 90% do valor total

    } else 
        percentualValorFinal = 1; // 100% do valor total
        
        return valor * percentualValorFinal // retornando valor descontado
    }
    
//função que calcula e retorna o percentual do desconto
function checarDescontoDisponivel(para20DeDesconto,para10DeDesconto,valor){
    if (valor > para20DeDesconto){
        desconto = '20%';
        
    }else if (valor > para10DeDesconto){
        desconto = '10%';

    } else 
        desconto = '0%';
        
    return desconto
    }

//função que retorna o valor que faltaria para um desconto maior
function quantoFaltaParaDesconto(para20DeDesconto,para10DeDesconto,valor){
     if (valor > para20DeDesconto){
        valorParaDesconto = 'Você atingiu o desconto maximo';
        
    }else if (valor >= para10DeDesconto){
        valorParaDesconto = 'Faltam '+(300 - valor +0.1)+'R$ para ter 20% de desconto';
    } else 
        valorParaDesconto = 'Faltam '+(100 - valor+0.1)+'R$ para ter 10% de desconto';
        
    return valorParaDesconto
}

//definindo valores descontados, percentuais de desconto e valor que faltaria para desconto
valorFinal = aplicarDesconto(para20DeDesconto,para10DeDesconto,valorCompra); // valor final descontado
desconto = checarDescontoDisponivel(para20DeDesconto,para10DeDesconto,valorCompra); // valor percentual de deconto em string
valorParaDesconto = quantoFaltaParaDesconto(para20DeDesconto,para10DeDesconto,valorCompra); // valor que faltaria para ter mais desconto e quanto seria

//printando resultaod final
console.log(`O valor ficou de ${valorCompra}R$ por ${valorFinal}R$ com ${desconto} de desconto `);
console.log(valorParaDesconto);













