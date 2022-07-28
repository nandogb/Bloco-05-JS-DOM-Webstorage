let novofilho = document.createElement("section")

// let pai = document.getElementById(elementoOndeVoceEsta).parentNode

let pai = document.getElementById("pai")

let testes = "Teste de criação de elementos"

novofilho.innerText = testes

pai.appendChild(novofilho);

novofilho.id = "novos-testes"