/* Inicializa a lista vazia de amigos */
let amigos = [];

/* Define os caracteres proibidos para os nomes */
const caracteresProibidos = ["@", "#", "$", "%", "&", "*", "!", "?", "/", "\\", "+", "=", "<", ">"];

/* Função para exibir o popup */
function mostrarPopup(mensagem, callback) {
    let popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <p>${mensagem}</p>
        <button>OK</button>
    `;
    document.body.appendChild(popup);

    const button = popup.querySelector('button');
    button.onclick = function() {
        popup.style.display = 'none';
        document.body.removeChild(popup);
        if (callback) callback();
    };

    popup.style.display = 'block';
}

/* Exibe uma mensagem de boas-vindas ao carregar a página */
mostrarPopup('Seja bem-vindo ao Amigo Secreto!', function() {
    const nome = prompt('Qual é o seu nome?');
    console.log(nome);

    let idade = parseInt(prompt('Qual é a sua idade?'));
    console.log(idade);

    mostrarPopup(`Seja bem-vindo, ${nome}!`, function() {
        mostrarPopup('Este é um site voltado para sua diversão, clique em "OK" para continuar.');
    });
});

/* Função para adicionar um amigo à lista */
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim();

    if (amigoNome === "") {
        mostrarPopup("Digite um nome válido!");
        return;
    }

    if (amigos.includes(amigoNome)) {
        mostrarPopup("Este nome já foi adicionado!");
        return;
    }

    if (/\d/.test(amigoNome)) {
        mostrarPopup("Números não são permitidos! Digite apenas letras.");
        return;
    }

    for (let i = 0; i < caracteresProibidos.length; i++) {
        if (amigoNome.includes(caracteresProibidos[i])) {
            mostrarPopup(`O caractere "${caracteresProibidos[i]}" não é permitido!`);
            return;
        }
    }

    amigos.push(amigoNome);
    atualizarLista();
    amigoInput.value = "";
    amigoInput.focus();
}

/* Função para atualizar a lista exibida com os amigos adicionados */
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/* Função para sortear os amigos garantindo que nenhum sorteie a si mesmo */
function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarPopup("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let sorteio;
    let valido = false;

    while (!valido) {
        sorteio = embaralharArray([...amigos]);
        valido = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteio[i]) {
                valido = false;
                break;
            }
        }
    }

    let resultados = [];
    for (let i = 0; i < amigos.length; i++) {
        resultados.push(`${amigos[i]} → ${sorteio[i]}`);
    }

    document.getElementById('sortearBtn').disabled = true;
    mostrarResultadosNaPagina(resultados);
}

function mostrarResultadosNaPagina(resultados) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    resultados.forEach((resultado, index) => {
        let li = document.createElement("li");
        li.innerHTML = resultado;
        li.style.textAlign = "center";
        resultadoElement.appendChild(li);
    });

    document.getElementById('reiniciarBtn').style.display = "block";
}

function reiniciarSorteio() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById('sortearBtn').disabled = false;
    document.getElementById('reiniciarBtn').style.display = "none";
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
