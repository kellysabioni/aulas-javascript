// Exemplo 1: objeto com dados de uma pessoa 
const pessoa =
{
//propriedade: valor
    nome: "Ana",
    idade: 20,
    cidade: "São Paulo",
    estado: "SP"
};

//Exibindo a estrutura do objeto
console.log(pessoa);

//Acessando determinadas propriedades
console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}!`);

//Exemplo 2: objeto com array
const livro =
{
    titulo: "O Senhor dos anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
}

//Exibindo a estrutura
console.log(livro);

//Acesso usando nome da propriedade e índice do array desta pripriedade
console.log(livro.volumes[1]);
console.log(`Trilogia ${livro.titulo},de ${livro.autor}, tem os volumes ${livro.volumes[0]}, ${livro.volumes[1]} e ${livro.volumes[2]}!`);

//Exemplo 3: array de abjetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K Rowling"
    },
    {
        titulo: "Senhor do Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }
];

console.log(livros); 

//Acessando atravé do índice a propriedade
console.log(livros[1].autor); 

/*Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
Data de Nascimento
(Use ARRAY) Lista de telefones (fixo e celular)
(DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
rua
número
bairro*/

const aluno = {
    nomeCompleto: "Ana Julia Sabioni Cegatto",
    dataNascimento: "09/11/2012",
    telefone_obj: [
        {celular: "11 98599-2718", fixo: "11 2043-1515"}
    ],
    telefone: ["11 98599-2718", "11 2043-1515"],
    endereco: {
        rua: "Rua José VIeira de Mendonça",
        numero: "25",
        bairro: "Penha",
    },
}

// Mostre no console o nome do aluno, o telefone celular e o bairro em que mora.
console.log(aluno.nomeCompleto);
console.log(aluno.telefone[0]);
console.log(aluno.telefone_obj[0].celular);
console.log(aluno.endereco.bairro);
