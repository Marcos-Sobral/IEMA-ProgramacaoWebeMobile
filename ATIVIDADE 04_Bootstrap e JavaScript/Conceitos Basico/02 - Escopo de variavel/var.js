var carro = "Fiat" //Escopo global

if(true){
    var carro = "Honda"; // Redefine o carro Globalmente!
    console.log("Dentro do bloco: "+ carro); //Resultado: Honda
}

console.log("Fora do bloco: "+ carro); // Resultado: Honda (Ops! Deveria ser Fiat)