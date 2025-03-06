// Declaração de arrays para armazenar itens das categorias
// Aqui criamos listas para separar os alimentos por tipo
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

// Variáveis auxiliares para entrada do usuário
// Usamos essas variáveis para armazenar os valores digitados pelo usuário
let comida = "";
let categoria = "";
let remover = "";

// Variável de controle do loop
// Ela determina se o programa continua perguntando ou encerra
let adicionarMais = "sim";  

// Loop principal para adicionar ou remover itens
// Esse laço continua rodando até o usuário responder "não"
while (adicionarMais !== "não") {
    
    // Verifica se a lista está vazia para decidir quais opções exibir
    // Se não há itens, não faz sentido perguntar sobre remoção
    if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        // Permite ao usuário adicionar ou remover itens caso já haja algo na lista
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }

    // Validação da entrada para evitar respostas inválidas
    // O loop força o usuário a escolher uma opção válida antes de continuar
    while (adicionarMais !== "sim" && adicionarMais !== "não" && adicionarMais !== "remover") {
        alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    // Se a resposta for "não", o loop encerra e exibe a lista final
    // Aqui finalizamos a interação com o usuário e seguimos para exibir a lista
    if (adicionarMais === "não") {
        break;
    }

    // Se o usuário quiser adicionar um item
    // Neste trecho coletamos a comida e a categoria informadas
    if (adicionarMais === "sim") {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

        // Verifica a categoria e adiciona o item à lista correta
        // Cada alimento vai para sua lista correspondente
        if (categoria === 'frutas') {
            frutas.push(comida); // Adiciona à lista de frutas
        } else if (categoria === 'laticínios') {
            laticinios.push(comida); // Adiciona à lista de laticínios
        } else if (categoria === 'doces') {
            doces.push(comida); // Adiciona à lista de doces
        } else if (categoria === 'congelados') {
            congelados.push(comida); // Adiciona à lista de congelados
        } else {
            // Caso o usuário digite uma categoria inválida
            alert("Essa categoria não foi pré-definida.");
        }

    } else if (adicionarMais === "remover") {
        
        // Se a lista estiver vazia, exibe um alerta e não permite remover
        // Evitamos um erro ao tentar remover de uma lista vazia
        if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {
            alert(`A lista está vazia!`);
        } else {
            // Exibe a lista atual antes de perguntar qual item remover
            // Aqui mostramos os alimentos já adicionados para o usuário escolher
            remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n\nQual produto você deseja remover?`);

            // Verifica em qual categoria o item está e remove se encontrado
            // O programa busca pelo item e, se existir, ele será removido
            if (frutas.includes(remover)) {
                frutas.splice(frutas.indexOf(remover), 1); // Remove da lista de frutas
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (laticinios.includes(remover)) {
                laticinios.splice(laticinios.indexOf(remover), 1); // Remove da lista de laticínios
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (doces.includes(remover)) {
                doces.splice(doces.indexOf(remover), 1); // Remove da lista de doces
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (congelados.includes(remover)) {
                congelados.splice(congelados.indexOf(remover), 1); // Remove da lista de congelados
                alert(`O item ${remover} foi removido com sucesso!`);
            } else {
                // Caso o item digitado não esteja na lista
                alert(`Não foi possível encontrar o item dentro da lista!`);
            }
        }
    }
}

// Exibe a lista final de compras para o usuário
// Mostramos todos os itens organizados por categoria
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`);