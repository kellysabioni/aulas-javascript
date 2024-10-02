// Declarar um array
let alunos = ["Jon Oliva","Ozzi Osborne","Tom Araya"];

//Exibindo a estrutura do array
console.log(alunos);

//Acessando um elemento específico do array
console.log(`${alunos[2]} é o vocalista da banda Slayer! 🤘`);

 /* Mini exercício 
 
 1) Crie um novo array contendo o nome de 7 coisas que você gosta (artista, múcisa, livro, comida... sei lá, inventa!)
 
 2) Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e sétimo elemento do array. Use concatenação ou template string*/

 let estilos = [
    "Axé",
    "Sertanejo",
    "Samba",
    "Samba Rock",
    "Rock",
    "MPB",
    "Reggae"
]

 console.log(estilos);

//Template string
 console.log(`Meu (mau) gosto muscial é bem eclético (para não dizer maluco), vai do axé ao heavy metal, mas os estilos que mais gosto são: ${estilos[1]}, ${estilos[4]} e ${estilos[6]}!`);

//Concatenação 
 console.log("Meu (mau) gosto muscial é bem eclético (para não dizer maluco), vai do axé ao heavy metal, mas os estilos que mais gosto são: "+estilos[1]+", "+estilos[4]+" e "+estilos[6]+"!");
 
 /* ARRAY COMO MATRIZ de 2 dimensões*/

 const tecnologias = [
    ["HTML5", "CSS3","JavaScrispt"],
    ["Figma","Photoshop"],
    ["PHP", "Node.js", "SQL", "Express",["Apache","IIS"]]
 ];

 console.log(tecnologias);

 //JavaScript
 console.log( 
    tecnologias
    [0]
    [2]);

//Figma
console.log(
    tecnologias
    [1]
    [0]);

//Express
    console.log(
    tecnologias
    [2]
    [3]);

//HTML
    console.log(
    tecnologias
    [0]
    [0]);
    
//Apache
    console.log(
    tecnologias
    [2]
    [4]
    [0]);
    
 