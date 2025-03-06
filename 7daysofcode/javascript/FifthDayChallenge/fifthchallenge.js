// Declaração de arrays vazios para armazenar os itens de cada categoria
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

// Variáveis para armazenar a comida e a categoria escolhida pelo usuário
let comida = "";
let categoria = "";

// Variável de controle para continuar adicionando itens à lista
let adicionarMais = "sim";  // Começa como "sim" para garantir que o loop seja executado pelo menos uma vez

// Estrutura de repetição para perguntar ao usuário se deseja adicionar itens
while(adicionarMais != "não"){  // Enquanto o usuário não responder "não", o loop continuará
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");

    // Verifica se a resposta do usuário é válida
    while (adicionarMais != "sim" && adicionarMais != "não") {  // Enquanto a resposta não for "sim" nem "não", repetir a pergunta
        alert(`Operação não reconhecida!`); // Mensagem de erro
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    // Se a resposta for "não", sair do loop
    if (adicionarMais === "não"){  
        break; // Interrompe o loop
    }

    // Pergunta ao usuário qual comida deseja adicionar
    comida = prompt("Qual comida você deseja inserir?");
    
    // Pergunta em qual categoria essa comida se encaixa
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

    // Verifica em qual categoria o item deve ser adicionado
    if(categoria === 'frutas'){
        frutas.push(comida);  // Adiciona à lista de frutas
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);  // Adiciona à lista de laticínios
    } else if (categoria === 'doces'){
        doces.push(comida);  // Adiciona à lista de doces
    } else if (categoria === 'congelados'){
        congelados.push(comida);  // Adiciona à lista de congelados
    } else {
        alert("Essa categoria não foi pré-definida.");  // Mensagem de erro caso a categoria não seja válida
    }
}

// Exibe a lista de compras final para o usuário
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);