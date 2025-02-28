/* Exibe uma mensagem de boas-vindas ao carregar a página */
alert('Seja bem-vindo ao Amigo Secreto!');

/* Solicita o nome do usuário e exibe no console */
const nome = prompt('Qual é o seu nome?');
console.log(nome);

/* Solicita a idade do usuário, converte para número e exibe no console */
let idade = parseInt(prompt('Qual é a sua idade?'));
console.log(idade);

/* Exibe uma mensagem personalizada e explica o funcionamento */
alert(`Seja bem-vindo, ${nome}!`);
alert('Este é um site voltado para sua diversão, clique em "OK" para continuar.');

/* Inicializa a lista vazia de amigos */
let amigos = [];

/* Define os caracteres proibidos para os nomes */
const caracteresProibidos = ["@", "#", "$", "%", "&", "*", "!", "?", "/", "\\", "+", "=", "<", ">"];

/* Função para adicionar um amigo à lista */
function adicionarAmigo() {
  /* Obtém o elemento do input e remove espaços extras */
  const amigoInput = document.getElementById('amigo');
  const amigoNome = amigoInput.value.trim();

  /* Validação: verifica se o nome está vazio */
  if (amigoNome === "") {
    alert("Digite um nome válido!");
    return;
  }

  /* Validação: impede nomes duplicados */
  if (amigos.includes(amigoNome)) {
    alert("Este nome já foi adicionado!");
    return;
  }

  /* Validação: impede a inclusão de números no nome */
  if (/\d/.test(amigoNome)) {
    alert("Números não são permitidos! Digite apenas letras.");
    return;
  }

  /* Validação: impede caracteres especiais proibidos */
  for (let i = 0; i < caracteresProibidos.length; i++) {
    if (amigoNome.includes(caracteresProibidos[i])) {
      alert(`O caractere "${caracteresProibidos[i]}" não é permitido!`);
      return;
    }
  }

  /* Se aprovado, adiciona o nome à lista e atualiza a exibição */
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
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  let sorteio;
  let valido = false;

  /* Embaralha e verifica se nenhum amigo sorteou a si mesmo */
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

  /* Monta um array com os pares do sorteio */
  let resultados = [];
  for (let i = 0; i < amigos.length; i++) {
    resultados.push(`${amigos[i]} → ${sorteio[i]}`);
  }

  /* Desabilita o botão de sortear enquanto os resultados são exibidos */
  document.getElementById('sortearBtn').disabled = true;
  mostrarResultadosSequencialmente(resultados);
}

/* Função para exibir os resultados do sorteio um por vez */
function mostrarResultadosSequencialmente(resultados) {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";  // Limpa resultados anteriores
  
  let i = 0;  // Índice para controlar os resultados

  function mostrarProximo() {
    if (i < resultados.length) {
      /* Cria um item <li> com o resultado atual e centraliza o texto */
      let li = document.createElement("li");
      li.innerHTML = resultados[i];
      li.style.textAlign = "center";
      resultadoElement.appendChild(li);
      
      /* Exibe o resultado atual */
      alert(resultados[i]);
      
      i++;  // Incrementa para o próximo resultado
      
      /* Exibe mensagem se houver mais pares ou mensagem final */
      if (i < resultados.length) {
        alert("Próximo sorteio");
      } else {
        alert("Fim do sorteio, clique em OK para recomeçar");
        /* Exibe o botão de reiniciar sorteio */
        document.getElementById('reiniciarBtn').style.display = "block";
      }
      
      /* Chama a função recursivamente para o próximo par */
      mostrarProximo();
    }
  }
  mostrarProximo();
}

/* Função para reiniciar o sorteio */
function reiniciarSorteio() {
  /* Limpa o elemento de resultados */
  document.getElementById("resultado").innerHTML = "";
  
  /* Reabilita o botão de sortear */
  document.getElementById('sortearBtn').disabled = false;
  
  /* Oculta o botão de reiniciar */
  document.getElementById('reiniciarBtn').style.display = "none";
}

/* Função para embaralhar um array utilizando o algoritmo Fisher-Yates */
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Troca os elementos
  }
  return array;
}
