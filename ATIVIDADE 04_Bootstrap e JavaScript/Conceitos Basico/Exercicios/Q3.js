let valorHora = 25;
let horasTrabalhadas = 160;
let salario = valorHora * horasTrabalhadas;

console.log("Salário do mês: R$ " + salario);

//Se quiser formatar o valor como moeda brasileira, pode usar toLocaleString:
console.log("Salário do mês: R$ " + salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
