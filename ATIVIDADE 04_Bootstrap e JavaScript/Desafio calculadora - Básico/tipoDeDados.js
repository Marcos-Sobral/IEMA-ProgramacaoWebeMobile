// A palavra-chave 'const' significa que o valor desta variável não vai mudar.

// 1. TEXTO (String)
// Usamos aspas ("" ou '') para textos e frases.
const nomeDeUsuario = "João da Silva";
console.log(`Nome: "${nomeDeUsuario}" é do tipo: ${typeof nomeDeUsuario}`);
// Saída: Nome: "João da Silva" é do tipo: string
console.log('---');

// 2. NÚMERO (Number)
// Usamos para quantidades, idades, preços, etc.
const idade = 25;
const precoProduto = 19.99;
console.log(`Idade: ${idade} é do tipo: ${typeof idade}`);
console.log(`Preço: ${precoProduto} é do tipo: ${typeof precoProduto}`);
console.log('---');

// 3. LÓGICO (Boolean)
// Só pode ser VERDADEIRO (true) ou FALSO (false).
const estaChovendo = true;
const temEstoque = false;
console.log(`Chovendo: ${estaChovendo} é do tipo: ${typeof estaChovendo}`);
console.log(`Estoque: ${temEstoque} é do tipo: ${typeof temEstoque}`);
console.log('---');

// 4. LISTA (Array)
// Usamos colchetes [ ] para guardar uma coleção de itens (lista).
const frutas = ["Maçã", "Banana", "Uva"];
console.log(`Frutas: [${frutas.join(', ')}] é do tipo: ${typeof frutas}`);
// OBS: Embora seja uma 'Lista', o JavaScript diz que o tipo é 'object'.
console.log('---');

// 5. OBJETO (Object)
// Usamos chaves { } para criar uma "ficha" com informações (chave: valor).
const dadosPessoa = {
  // Chave: Valor
  cidade: "São Paulo",
  altura: 1.75,
  ativo: true
};
console.log(`Objeto (Cidade): ${dadosPessoa.cidade} é do tipo: ${typeof dadosPessoa}`);
// Saída: Objeto (Cidade): São Paulo é do tipo: object