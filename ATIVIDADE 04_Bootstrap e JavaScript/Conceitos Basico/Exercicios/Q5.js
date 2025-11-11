let produto = "Mouse";
let preco = 59.90;
let quantidade = 3;
let total = preco * quantidade;

console.log("Produto: " + produto);
console.log("Quantidade: " + quantidade);
console.log("Total: R$" + total);
console.log("Total: R$" + total.toFixed(2));
console.log("Total: " + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
