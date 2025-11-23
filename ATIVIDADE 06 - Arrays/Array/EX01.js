function Q01() {
    let animais = ["Macaco", "Cachorro", "Cobra"];
    console.log(animais);
}
function Q02() {
    let numero = new Array(5,10,15,20);
    console.log(numero[0]+numero[1]);
}
function Q03() {
    let dados = Array.of(42,"JS",false);
    console.log(dados[2]);
}
function Q04() {
    let palavraArray = Array.from("Açailândia");
    //Template String
    console.log(`A palavra "${palavraArray.join('')}" possui ${palavraArray.length} letras.`);
}
Q04();