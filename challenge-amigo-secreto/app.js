// Mensagem de Boas-Vindas
alert('Seja bem-vindo ao Amigo Secreto!');

// Identificando jogador e idade
const nome = prompt('Qual é o seu nome?');
console.log(nome);
let idade = parseInt(prompt('Qual é a sua idade?'));
console.log(idade);

// Mensagem de boas-vindas personalizada
alert(`Seja bem-vindo, ${nome}!`);
alert('Este é um site voltado para sua diversão, clique em "OK" para continuar.');

// Lista de amigos
let amigos = [];

// Lista de caracteres proibidos
const caracteresProibidos = ["@", "#", "$", "%", "&", "*", "!", "?", "/", "\\", "+", "=", "<", ">"];

// Função para adicionar amigos
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim(); // Remove espaços extras

    // Validação: Nome vazio
    if (amigoNome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Validação: Nome já adicionado
    if (amigos.includes(amigoNome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Validação: Bloquear números
    function contemNumeros(nome) {
        for (let i = 0; i < nome.length; i++) {
            if (!isNaN(parseInt(nome[i]))) {
                return true; // Encontrou um número
            }
        }
        return false; // Nenhum número encontrado
    }

    if (contemNumeros(amigoNome)) {
        alert("Números não são permitidos! Digite apenas letras.");
        return;
    }

    // Validação: Bloquear caracteres especiais
    for (let i = 0; i < caracteresProibidos.length; i++) {
        if (amigoNome.includes(caracteresProibidos[i])) {
            alert(`O caractere "${caracteresProibidos[i]}" não é permitido!`);
            return;
        }
    }
    
    // Atualiza a lista na tela e limpa o campo de entrada
    amigos.push(amigoNome);
    atualizarLista(); // Atualiza a lista na tela
    amigoInput.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let sorteio = [...amigos]; // Copia a lista para embaralhar
    sorteio = embaralharArray(sorteio);

    let resultadoHTML = "";
    let tentativas = 0;
    while (true) {
        let valido = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteio[i]) {
                valido = false;
                break;
            }
        }
        if (valido) {
            break;
        } else {
            sorteio = embaralharArray([...amigos]);
            tentativas++;
            if (tentativas > 1000) {
                alert("Não foi possível realizar um sorteio válido. Tente novamente.");
                return;
            }
        }
    }

    for (let i = 0; i < amigos.length; i++) {
        resultadoHTML += `<li>${amigos[i]} → ${sorteio[i]}</li>`;
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}

// Função para embaralhar a lista (algoritmo Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}