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

const links = document.querySelectorAll(".lista-de-referencias a") /* Seleciona todos os links (elementos <a>) */

//Exemplo com for 
/* 
for (let i = 0; i < links.length; i++) {links[i].setAttribute("target", "_blank");}
*/

//Exemplo com for of
for (const link of links) {
/*  link.setAttribute("target","_blank") */
    link.target = "_blank"
}

//Exemplo com for Each
/*
links.forEach(link => {link.setAttribute("target", "_blank");});
*/

/* Manipulando eventos */
const ex1 = document.querySelector("#exemplo1")
const msg = document.querySelector("#mensagem")
const pagina = document.querySelector("body")


//Poderiamos também usar a função getElementsById. A diferença é que ela só funciona para seleção com ID. Obs.: ao usá-la NÃO COLOQUE #

/* Ouvinte de Evento (Event Listener) aplicado ao elemento ALVO do evento desejado ("click") e uma função para executar as ações a partir do evento. Obs,: Esta função é considerada do tipo "anônima" e é conhecida como "callback" */

ex1.addEventListener(
    "click" /* "ação que quero monitorar" */, 
    function/* função a ser executada */ ()
    {
    /* Acessando o parágrafo vazio e colocamos um conteúdo dentro dele  */
    msg.innerHTML = "Olá ❤!"
    
    /* Modificar a página alternando a fonte (CSS via JS) */
    pagina.style.fontFamily = "verdana"
});

/* Ouvinte de evento para voltar ao normal (sem texto e com fonte padrão) */

msg.addEventListener("dblclick", function () {
    msg.innerHTML=""; //removendo conteúdo do parágrafo
    pagina.style.fontFamily = "initial" //alternando para fonte padrão
})

/* Exemplo 02: Modo noturno  */

const botaoAtivar = document.querySelector("#ativar")
botaoAtivar.addEventListener("click",
    function () {
        //TOGGLE usado para alternar a aplicação/remoção da classe noturno. Na prática funciona como um botão liga/desliga
        pagina.classList.toggle("noturno")        

     /* DESAFIO! FAÇA AQUI MESMO: Trocar o texto do botão. Se a página estiver com a classe "noturno" aplicada, o botão deve mostrar a palavra "Desativar". Caso contrário deve mostrar a palavra "Ativar". Use if/else */   

        // Verifica se o body tem a classe 'noturno'. contains precisa obrigatoriamente de um valor
/*             if (pagina.classList.contains('noturno')) {
                botaoAtivar.textContent = "Desativar";
              
            } else {
                botaoAtivar.textContent = "Ativar";
             }*/
            //exemplo usando a class = ""
                if (pagina.className == "") {
                    botaoAtivar.textContent = "Ativar";
                  
                } else {
                    botaoAtivar.textContent = "Desativar";
                 }

    }
)


/* Sobre o duplo e triplo sinal de igual  */

let a = "10";
let b = 10;
let resultado = a === b;

console.log(resultado);

// duplo sinal de igual compara valores, não levando em consideração se é número ou texto 

// triplo sinal de ==, também compara valores, mas leva em consideração o tipo de dado (texto, números, etc)
