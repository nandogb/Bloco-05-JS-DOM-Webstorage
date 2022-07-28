let corpo = document.getElementById("body");

let titulo = document.createElement("h1");

titulo.innerText = "Exercícios 5.2 - Javascript - DOM";

corpo.appendChild(titulo);

//

let principal = document.createElement("main");

principal.className = "main-content";

corpo.appendChild(principal);

//

let secaoUm = document.createElement("section");

secaoUm.className = "center-content";

principal.appendChild(secaoUm);

//

let paragrafoUm = document.createElement("p");

paragrafoUm.innerText = "Dia 03 de DOM e Seletores";

secaoUm.appendChild(paragrafoUm);

//

let secaoDois = document.createElement("section");

secaoDois.className = "right-content";

principal.appendChild(secaoDois);

let secaoTres = document.createElement("section");

secaoTres.className = "left-content";

principal.appendChild(secaoTres);

//

let numeros = [
  "um",
  "dois",
  "trẽs",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

let lista = document.createElement("ol");

lista.className = "lista-de-numeros"

secaoDois.appendChild(lista)

let numbers = document.createElement("li")

