
// Definição das questões (metadados + função de execução)
const QUESTOES = [
  {
    id: 1,
    titulo: "Tipo de dado adequado para nome",
    descricao: "Armazenar nome de cliente em uma variável.",
    run: (ctx) => {
      const nomeCliente = "João";
      ctx.out(`Tipo de dado: String -> ${nomeCliente}`);
    }
  },
  {
    id: 2,
    titulo: "Desvio condicional simples (idade)",
    descricao: "Se idade <= 18, imprime 'Menor de idade'.",
    inputs: [{ name: "idade", placeholder: "Digite a idade (ex: 16)", type: "number", value: 16 }],
    run: (ctx) => {
      const idade = Number(ctx.get("idade"));
      if (idade <= 18) ctx.out("Menor de idade");
    }
  },
  {
    id: 3,
    titulo: "Desvio condicional simples (número positivo)",
    descricao: "Se número > 0, imprime 'Número positivo'.",
    inputs: [{ name: "numero", placeholder: "Digite um número (ex: -5)", type: "number", value: -5 }],
    run: (ctx) => {
      const numero = Number(ctx.get("numero"));
      if (numero > 0) ctx.out("Número positivo");
    }
  },
  {
    id: 4,
    titulo: "Desvio condicional composto (idade)",
    descricao: "Maior ou menor de idade com if/else.",
    inputs: [{ name: "idade", placeholder: "Digite a idade (ex: 15)", type: "number", value: 15 }],
    run: (ctx) => {
      const idade = Number(ctx.get("idade"));
      if (idade >= 18) ctx.out("Maior de idade");
      else ctx.out("Menor de idade");
    }
  },
  {
    id: 5,
    titulo: "Função do else",
    descricao: "Verifica se pode votar (>=16) ou não.",
    inputs: [{ name: "idade", placeholder: "Idade (ex: 15)", type: "number", value: 15 }],
    run: (ctx) => {
      const idade = Number(ctx.get("idade"));
      if (idade >= 16) ctx.out("Pode votar");
      else ctx.out("Não pode votar"); // else quando condição é falsa
    }
  },
  {
    id: 6,
    titulo: "Condicional aninhada (nota e frequência)",
    descricao: "Aprovado, reprovado por falta ou por nota.",
    inputs: [
      { name: "nota", placeholder: "Nota (ex: 8)", type: "number", value: 8 },
      { name: "freq", placeholder: "Frequência (ex: 70)", type: "number", value: 70 }
    ],
    run: (ctx) => {
      const nota = Number(ctx.get("nota"));
      const frequencia = Number(ctx.get("freq"));
      if (nota >= 7) {
        if (frequencia >= 75) ctx.out("Aprovado");
        else ctx.out("Reprovado por falta");
      } else ctx.out("Reprovado por nota");
    }
  },
  {
    id: 7,
    titulo: "Condicional aninhada com entrada do usuário",
    descricao: "Nota e frequência via inputs.",
    inputs: [
      { name: "nota", placeholder: "Nota (ex: 10)", type: "number", value: 10 },
      { name: "freq", placeholder: "Frequência (ex: 90)", type: "number", value: 90 }
    ],
    run: (ctx) => {
      const nota = Number(ctx.get("nota"));
      const frequencia = Number(ctx.get("freq"));
      if (nota >= 7) {
        if (frequencia >= 75) ctx.out("Aprovado");
        else ctx.out("Reprovado por falta");
      } else ctx.out("Reprovado por nota");
    }
  },
  {
    id: 8,
    titulo: "Laço while (contador até 3)",
    descricao: "Imprime 1, 2, 3 com while.",
    run: (ctx) => {
      let contador = 1;
      while (contador <= 3) {
        ctx.out(contador);
        contador++;
      }
    }
  },
  {
    id: 9,
    titulo: "Estrutura de escolha switch/case",
    descricao: "Menu: cadastrar, excluir ou listar.",
    inputs: [{ name: "opcao", placeholder: "Opção (1, 2, 3)", type: "number", value: 3 }],
    run: (ctx) => {
      const opcao = Number(ctx.get("opcao"));
      switch (opcao) {
        case 1: ctx.out("Cadastrar aluno"); break;
        case 2: ctx.out("Excluir aluno"); break;
        case 3: ctx.out("Listar alunos"); break;
        default: ctx.out("Opção inválida");
      }
    }
  },
  {
    id: 10,
    titulo: "Laço do...while (executa pelo menos uma vez)",
    descricao: "Exibe 'Executado' com do...while.",
    run: (ctx) => {
      let numero = -1;
      do {
        ctx.out("Executado");
        numero++;
      } while (numero < 0);
    }
  },
  {
    id: 11,
    titulo: "While de 20 até 1",
    descricao: "Imprime descrescente de 20 a 1.",
    run: (ctx) => {
      let contador = 20;
      while (contador >= 1) {
        ctx.out(contador);
        contador--;
      }
    }
  },
  {
    id: 12,
    titulo: "Laço for (pares até 10)",
    descricao: "Imprime 2, 4, 6, 8, 10.",
    run: (ctx) => {
      for (let i = 2; i <= 10; i += 2) ctx.out(i);
    }
  },
  {
    id: 13,
    titulo: "Do...while exigindo número positivo",
    descricao: "Solicita até ser > 0 (simulado).",
    inputs: [{ name: "entrada", placeholder: "Valor (ex: 1)", type: "number", value: 1 }],
    run: (ctx) => {
      let numero;
      let tentativas = 0;
      // Simula tentativa até ser positivo (usando o valor do input)
      do {
        numero = Number(ctx.get("entrada"));
        tentativas++;
        ctx.out(`Tentativa #${tentativas} -> ${numero}`);
        // Se quiser simular erro, troque o input para <= 0
      } while (numero <= 0);
      ctx.out("Entrada válida: " + numero);
    }
  },
  {
    id: 14,
    titulo: "Diferença while vs do...while",
    descricao: "While pode não executar; do...while executa ao menos uma vez.",
    run: (ctx) => {
      ctx.out("While: testa antes e pode não executar.");
      ctx.out("Do...while: testa depois e executa pelo menos uma vez.");
    }
  },
  {
    id: 15,
    titulo: "Laço for (valor final de i)",
    descricao: "Imprime 1 a 4 e mostra i ao final.",
    run: (ctx) => {
      let finalI;
      for (let i = 1; i <= 4; i++) {
        ctx.out("Número: " + i);
        finalI = i;
      }
      ctx.out("Após o laço, i seria 5 (condição falha quando i = 5).");
    }
  },
  {
    id: 16,
    titulo: "Laço com condicional (pares)",
    descricao: "Imprime apenas números pares entre 1 e 5.",
    run: (ctx) => {
      const pares = [];
      for (let i = 1; i <= 5; i++) if (i % 2 === 0) pares.push(i);
      ctx.out(pares.join(", "));
    }
  },
  {
    id: 17,
    titulo: "Do...while com senha",
    descricao: "Executa até digitar '1234'.",
    inputs: [{ name: "senha", placeholder: "Senha (ex: 1234)", type: "text", value: "1234" }],
    run: (ctx) => {
      let senha, tentativas = 0;
      do {
        senha = ctx.get("senha");
        tentativas++;
        ctx.out(`Tentativa #${tentativas}`);
      } while (senha !== "1234");
      ctx.out("Acesso permitido");
    }
  },
  {
    id: 18,
    titulo: "Switch vs múltiplos if/else",
    descricao: "Vantagem: mais legível e organizado quando há muitas opções para uma variável.",
    inputs: [{ name: "opcao", placeholder: "Opção (1, 2, 3)", type: "number", value: 1 }],
    run: (ctx) => {
      ctx.out("Vantagem: clareza, manutenção e desempenho similar; reduz cascatas de if/else.");
      const opcao = Number(ctx.get("opcao"));
      switch (opcao) {
        case 1: ctx.out("Cadastrar aluno"); break;
        case 2: ctx.out("Excluir aluno"); break;
        case 3: ctx.out("Listar alunos"); break;
        default: ctx.out("Opção inválida");
      }
    }
  },
  {
    id: 19,
    titulo: "Comparação: while, do...while e for",
    descricao: "Características e exemplos práticos.",
    run: (ctx) => {
      ctx.out("While: condição antes; uso quando não se sabe o total de repetições.");
      let i = 1;
      while (i <= 3) { ctx.out("While -> " + i); i++; }

      ctx.out("Do...while: executa ao menos uma vez; condição depois.");
      let j = 0;
      do { ctx.out("Do...while -> " + j); j++; } while (j < 1);

      ctx.out("For: controle explícito de início/fim/incremento; ideal quando se sabe o total.");
      for (let k = 1; k <= 3; k++) ctx.out("For -> " + k);
    }
  },
  {
    id: 20,
    titulo: "Enquanto vs Repita até (diferença prática)",
    descricao: "Demonstra que do...while roda ao menos uma vez.",
    run: (ctx) => {
      ctx.out("While testa antes (pode não executar); Do...while testa depois (executa ao menos uma vez).");
      let x = 5;
      while (x < 0) {
        ctx.out("While executado");
      }
      let y = -1;
      do {
        ctx.out("Do...while executado");
        y++;
      } while (y < 0);
    }
  }
];

// Renderização dos cartões
const grid = document.getElementById("cards");

function createCard({ id, titulo, descricao, inputs, run }) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>Questão ${String(id).padStart(2, "0")} <span class="badge">JS</span></h3>
    <div class="desc">${descricao}</div>
    <div class="row">${(inputs || []).map(inputHTML).join("")}</div>
    <div class="actions">
      <button data-id="${id}" class="exec">Executar</button>
      <button data-id="${id}" class="clear">Limpar saída</button>
    </div>
    <div class="output" id="out-${id}"></div>
  `;
  grid.appendChild(card);

  const outputEl = card.querySelector(`#out-${id}`);
  const execBtn = card.querySelector("button.exec");
  const clearBtn = card.querySelector("button.clear");

  const ctx = {
    out: (msg) => outputEl.textContent += (outputEl.textContent ? "\n" : "") + String(msg),
    get: (name) => {
      const el = card.querySelector(`[name="${name}"]`);
      return el ? el.value : undefined;
    },
    set: (name, value) => {
      const el = card.querySelector(`[name="${name}"]`);
      if (el) el.value = value;
    },
    clear: () => outputEl.textContent = ""
  };

  execBtn.addEventListener("click", () => {
    ctx.clear();
    try { run(ctx); } catch (e) { ctx.out("Erro: " + e.message); }
  });
  clearBtn.addEventListener("click", ctx.clear);
}

function inputHTML({ name, placeholder, type = "text", value = "" }) {
  return `<input name="${name}" type="${type}" placeholder="${placeholder}" value="${value}" />`;
}

// Inicializa UI
QUESTOES.forEach(createCard);

// Toolbar (executar/limpar todas)
document.getElementById("runAll").addEventListener("click", () => {
  document.querySelectorAll(".exec").forEach(btn => btn.click());
});
document.getElementById("clearAll").addEventListener("click", () => {
  document.querySelectorAll(".output").forEach(out => out.textContent = "");
});
