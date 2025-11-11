let carro = "Fiat" //Escopo global

if(true){
    let carro = "Honda"; // Cria uma nova variavel LOCAL, onde só existe dentro desse bloco IF
    console.log("Dentro do bloco: "+ carro); //Resultado: Honda
}

console.log("Fora do bloco: "+ carro); // Resultado: Fiat