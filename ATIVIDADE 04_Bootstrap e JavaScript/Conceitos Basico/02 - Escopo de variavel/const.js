const PI = 3.14159;
PI = 4;
//Caso tentar alterar o valor da variavel Pi vai dá erro, pois o seu valor é imutável.

if (true) {
    const cor = "Azul"; //Variavel Local
    console.log("Cor local: "+ cor);
}

//Caso tente imprimir a saída da variavel cor fora da estrutura if ocorrerá um erro, pois ele apenas existe naquele bloco.
console.log(cor);