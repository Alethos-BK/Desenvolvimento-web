import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


var dia = ["Domingo", "Segunda", "Terça", "Quarta"];
dia[4] = "Quinta";
dia[5] = "Sexta";
dia[6] = "Sábado";

var data = new Date();
var teste = data.getDay();

ReactDOM.render(teste, document.getElementById("root"));
// console.log("aaa");

// Criar uma Lista de coisas em aberto.

//     - [ ]  Declarar um array já inicializado com as "coisas"
//     - [ ]  Cada coisa é um objeto com dois atributos:
//     { nome: "String", pronto: "Boolean" }
//     - [ ]  Exibir no console:
//         - [ ]  A lista completa de coisas
//         - [ ]  Apenas as coisas "em aberto"
//         - [ ]  Apenas as coisas "prontas".*/
        let coisa1 = {
            nome: "Arroz",
            pronto: true
        }
        let coisa2 = {
            nome: "Bala",
            pronto: false
        }
        let coisa3 = {
            nome: "Feijão",
            pronto: true
        }

function coisaPronta(coisa){
    if(coisa.pronto){ 
        
        return coisa.pronto;
    }
    var coisas = [coisa1, coisa2, coisa3]
    for (let a of coisas) console.log(a);
}

// coisaPronta();


