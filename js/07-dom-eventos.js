/* Funções de acesso e manipulação do DOM 

querySelector()    >>>>>> Função para selecionar UM ÚNICO elemento na página do (DOM).
querySelectorAll() >>>>>> Função para selecionar VÁRIOS elementos na página do (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.
*/

/* Exemplos */
const titulo = document.querySelector("h1");
const textDom = document.querySelector(".texto-dom");
const subtitulos = document.querySelectorAll("h2")
const varios = document.querySelectorAll("p, img, button")

/* Modificando elementos do DOM */
titulo.textContent = "Olá JavaScript!";
textDom.innerHTML = "<i>Marcio será reprovado</i>"

/* Selecionar todos os links da lista de referencias e colocar neles o atributo target valendo _blank */

const links = document.querySelectorAll(".lista-de-referencias a") // Seleciona todos os links (elementos <a>)

//Exemplo com for 
/* for (let i = 0; i < links.length; i++) {
    links[i].setAttribute("target", "_blank"); 
} */

//Exemplo com for of
for (const link of links) {
/*     link.setAttribute("target","_blank") */
    link.target = "_blank"
}

//Exemplo com for Each
/* links.forEach(link => {
    link.setAttribute("target", "_blank");
}); */

//

/* Manipulando eventos */
const ex1 = document.querySelector("#exemplo1")
const msg = document.querySelector("#mensagem")

ex1;addEventListener("click", function(){msg.innerHTML = "Olá ❤!"}

)
console.log(ex1);
console.log(msg);
