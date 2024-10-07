# Aulas JavaScript

Introdução ao JavaScript para uso básico.

## Sobre a linguagem 

- JavaScript **NÃO É** Java
- JavaScript - JS - EcmaScript
- É uma linguagem voltada principalmente para o front-end.
- Mas também pode ser usada no back-end, através de plataformas como o Node.js, por exemplo. 
- Até mesmo no nicho de apps Mobile, o JS também pode ser usado (React, Next.js, React Native, etc.)

## Onde usar o JS dentro do Front-End?

- Funcionalidades de menu responsivo.
- Galeria de fotos 
- Carrosel/Slider de conteúdo
- Recursos avançados de formulário (validação, integração com API)
- Interações avançadas (Manipulação de mouse, teclado, gestos, toques, etc.)

## Como implementar?

### Interno

Programação feita dentro da própria pagina HTML usando a tag `<script>`, usada principalmente quando são scripts mais simples ou pequenos.

### Externo

Programação feita dentro de arquivos JavaScript exclusivos (possuem a extensão **.js**) usada principalmente quando queremos retulizar o scripts em páginas HTML diferetnes. A ligação entre o arquivo JavaScript e a página HTML também é feita usando a tag `<script>`. É a forma mais recomendada.

**Obs.:** normalmente a programação é feita ou ligada **NO FINAL** da página HTML, portanto pouco antes do do fechamento `<\body>`. 

---

## Sobre Arrays

Arrays são estruturas de dados **indexados**, também conhecidos como **vetores** ou **matrizes**.

Na prática, um array é uma lista de dados sequenciais, cada dado é armazenado numa posição/índice do array

**Obs.:** a contação do índice do array **sempre inicia em zero**.

## Sobre Objetos 

Objetos também são estruturas de dados só que **não-indexados**, ou seja, o acesso aos dados é feito de forma diferente do que vimos no arrays. No objeto, acessamos através de **propriedades** e **valores** declarados dentro do objeto.

Normalmente, o objeto é programado de acordo com algum contexto relacionado ao mundo real.

## Funções de acesso e manipulação do DOM 

`querySelector()`    
>>> Função para selecionar **UM ÚNICO** elemento na página do (DOM).

`querySelectorAll()` 
>>> Função para selecionar **VÁRIOS** elementos na página do (DOM).

Nos dois casos, a seleção é feita usando **seletores comuns** ao que fazemos no CSS.
