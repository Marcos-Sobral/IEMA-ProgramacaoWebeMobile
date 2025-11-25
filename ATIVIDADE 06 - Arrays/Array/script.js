function ArrayLiteral(){
    let fruta01 = "Maça";
    let fruta02 = "Banana";
    let fruta03 = "Laranja";
    
    let frutas = ["Maça","Banana","Laranja"];
    
    /*let frutas = [
        "Maça",
        "Banana",
        "Laranja"
    ];*/
    
    console.log(frutas);
}

ArrayLiteral();

function ArrayConstrutor() {
    //cada argumento vira um elemento do array.
    let numeros = new Array(1, 2, 3, 4);
    console.log(numeros); // [1, 2, 3, 4]

    //Aqui o número não é um valor dentro do array, mas sim o tamanho inicial.
    let vazio = new Array(5);
    console.log(vazio); // [ <5 empty items> ]
    console.log(vazio.length); // 5

    //O array terá um único elemento, exatamente como esperado.
    let letras = new Array("A");
    console.log(letras); // ["A"]

    let arr2 = new Array(5); // [ <5 empty items> ]

    //Use new Array(n) apenas quando quiser reservar espaço para n elementos, geralmente em casos específicos (como inicializar com fill()):
    let arr = new Array(5).fill(0);
    console.log(arr); // [0, 0, 0, 0, 0]
}

function ArrayEstatico() {
    //Criar array com valor exato
    let arr1 = Array.of(5); // [5]
    console.log(arr1);
}

function ArrayIteravel() {
    let palavra = Array.from("Copilot");
    console.log(palavra.length); // Deve mostrar     
}

function ExemploMatriz() {
    // Matriz 2x3 (2 linhas, 3 colunas)
    let matriz = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    console.log(matriz[0][1]); // 2 (linha 0, coluna 1)
    console.log(matriz[1][2]); // 6 (linha 1, coluna 2)
}

//Atividade de Matrizes


let turmas = [
    // Turma A (Índice 0)
    ["João Silva", "Maria Clara", "Pedro Souza", "Ana Luiza"],
    
    // Turma B (Índice 1)
    ["Carlos Moura", "Sofia Lima", "Rafael Costa", "Leticia Alves"]
];

//Crie uma matriz com nomes de alunos em 2 turmas.
function Q01_Matriz() {
    console.log("Matriz de Turmas:", turmas);
}

//Acesse o segundo aluno da primeira turma.
function Q02_Matriz() {
    console.log("Segundo aluno da Turma 1:", turmas[0][1]); // Bruno
}

//Percorra toda a matriz com for duplo e imprima os nomes
function Q03_Matriz() {
    for (let i = 0; i < turmas.length; i++) {
        for (let j = 0; j < turmas[i].length; j++) {
            console.log(`Turma ${i+1}, Aluno ${j+1}: ${turmas[i][j]}`);
        }
    }
}

// JSON

function exemplo_Json() {
    // Objeto JSON representando um aluno
    let aluno = {
        "nome": "Guilherme",
        "idade": 20,
        "curso": "Sistemas de informação",
        "notas": [8, 9, 7]
    };

    console.log(aluno.nome);     // Guilherme
    console.log(aluno.notas[1]); // 9

}

// Q01_json - 1. Criando objeto JSON
let livro = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "categorias": ["Fantasia", "Aventura", "Clássico"]
};

// 2. Transformando em string JSON
function Q02_Json() {
    let livroString = JSON.stringify(livro);
    console.log("String JSON:", livroString);
}

// 3. Convertendo de volta para objeto
function Q03_Json() {
    let novoLivro = JSON.parse(livroString);
    console.log("Autor do livro:", novoLivro.autor); // J.R.R. Tolkien
}