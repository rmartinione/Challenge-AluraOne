// Função para somar dois valores, convertendo-os para número antes da operação
function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

// Função para subtrair dois valores, garantindo que sejam números
function subtracao(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

// Função para multiplicar dois valores, convertendo para número antes da operação
function multiplicacao(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

// Função para dividir dois valores, garantindo conversão numérica
function divisao(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

// Declaração de variáveis para armazenar os números e a operação escolhida
let valor1;
let valor2;
let operacao = "";

// Estrutura de repetição 'do...while' para garantir que o código execute ao menos uma vez
do {  
    // Pergunta ao usuário qual operação deseja realizar
    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    
    // Validação da entrada: enquanto o usuário não digitar uma opção válida, exibir um alerta e perguntar novamente
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {  
        alert(`Operação não reconhecida!`);  // Mensagem de erro
        operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }

    // Se o usuário escolher "sair", interromper o loop e encerrar a calculadora
    if (operacao === "sair"){  
        break;  
    }

    // Solicita os valores ao usuário
    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);

    // Estrutura switch para executar a operação escolhida e exibir o resultado
    switch (operacao) {
        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);  // Chama a função soma e exibe o resultado
            break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);  // Chama a função subtração
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);  // Chama a função multiplicação
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);  // Chama a função divisão
            break;
    }

// O loop continuará enquanto a operação for válida (soma, subtração, multiplicação ou divisão)
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão");

// Exibe uma mensagem de despedida ao usuário
alert(`Até a próxima!`);