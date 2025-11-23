function Q01() {
    let cidades = ["Bom jesus", "Açailândia", "São Paulo", "Paraíso do Tocantins","Palmas"];
    for (let i = 0; i < cidades.length; i++) {
        console.log(cidades[i]);
    }
}

function Q02() {
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]; 
    
    //Acessando a matriz
    //console.log(matriz);
    
    let cont = 0;
    //Enquanto
    while (cont < matriz.length) {
        console.log(matriz[cont]);
        cont++;
    }

    //Repita até
    /*do{
        console.log(matriz[cont]);
        cont++;
    }while (cont < matriz.length);*/

    //Para
    /*for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }*/ 
}

function Q03() {
    let aluno = {
        "nome": "Marcos",
        "idade": 16,
        "curso": "Introdução a Programação Web"
    };  

    let produtos = [
        {
            "nome": "Mouse Gamer Redragon Cobra Pro",
            "preco": 164.00,
            "categoria": "Periféricos"
        },
        {
            "nome": "TECLADO MECÂNICO K500-B94",
            "preco": 274.00,
            "categoria": "Periféricos"
        },
        {
            "nome": "Iphone 16 Pro Max",
            "preco": 7.150,
            "categoria": "Celular"
        },
        {
            "nome": "Celular Xiaomi Poco X7 Pro",
            "preco": 1.899,
            "categoria": "Celular"
        },
        {
            "nome": "Samsung Galaxy S24 FE",
            "preco": 2.975,
            "categoria": "Celular"
        },
    ];

    for (const i in produtos) {
        console.log(produtos[i]);
    }

    /*produtos.forEach(produto => {
        console.log(produto)
    });*/
}

function Q04() {
    let notas_alunos = [
        7.5,    // Nota do Aluno 1
        9.0,    // Nota do Aluno 2
        5.8,    // Nota do Aluno 3
        10.0,   // Nota do Aluno 4
        6.2     // Nota do Aluno 5
    ];

    notas_alunos.forEach(nota => {
        console.log(nota);
    });

    let Registros_Escolares = [
        {
            aluno: "Ana Beatriz",
            disciplina: "Matemática",
            nota: 8.5,
            periodo: "1º Semestre 2025"
        },
        {
            aluno: "Carlos Eduardo",
            disciplina: "Português",
            nota: 7.0,
            periodo: "1º Semestre 2025"
        },
        {
            aluno: "Ana Beatriz",
            disciplina: "Física",
            nota: 9.2,
            periodo: "1º Semestre 2025"
        },
        {
            aluno: "Carlos Eduardo",
            disciplina: "Matemática",
            nota: 6.8,
            periodo: "1º Semestre 2025"
        }
    ];
    
    Registros_Escolares.forEach(registro => {
        console.log(registro);
    });
}
Q04();