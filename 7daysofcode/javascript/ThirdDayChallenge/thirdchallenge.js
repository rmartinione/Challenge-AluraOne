// Solicita ao usuário que escolha entre as áreas "Front-End" ou "Back-End"
const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");

// Declara a variável 'linguagem' que será usada posteriormente para armazenar a escolha de tecnologia
let linguagem = "";

// Verifica se o usuário escolheu "Front-End"
if (area === "Front-End") {
    // Se for "Front-End", pergunta se quer aprender React ou Vue
    linguagem = prompt("Você quer aprender React ou Vue?");
}
// Se a escolha for "Back-End"
else if (area === "Back-End") {
    // Pergunta se quer aprender C# ou Java
    linguagem = prompt("Você quer aprender C# ou Java?");
}
// Caso o usuário digite algo inválido
else {
    // Exibe um alerta informando que a entrada não é válida
    alert("Você não inseriu uma área válida!");
}

// Pergunta ao usuário se deseja se especializar na área escolhida ou seguir para Fullstack
const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");

// Verifica se o usuário escolheu se especializar na área escolhida
if (especialidadeOuFullstack == 1) {
    // Exibe uma mensagem encorajando a especialização na tecnologia escolhida
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
// Se o usuário optou por se tornar Fullstack
else if (especialidadeOuFullstack == 2) {
    // Exibe uma mensagem incentivando a aprender novas linguagens
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
// Caso o usuário insira um valor inválido
else {
    // Exibe um alerta informando que a entrada não é válida
    alert("Você não inseriu um valor válido!");
}

// Pergunta ao usuário se há mais alguma tecnologia que ele gostaria de aprender
let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");

// Enquanto o usuário continuar digitando "ok", o loop continuará perguntando por novas tecnologias
while (msg === "ok") {
    // Solicita ao usuário que informe uma nova tecnologia
    let novaTecnologia = prompt("Qual?");
    
    // Exibe um alerta dizendo que a tecnologia mencionada é interessante
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    
    // Pergunta novamente se há mais alguma tecnologia que ele gostaria de aprender
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}