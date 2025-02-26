// ** Criando as Variáveis ** //
let nome = '';
let idade = '';
let curso = '';
let resposta = '';
let nova_pergunta = nova_resposta = ''


// Função para validar respostas não vazias
function validarResposta(resposta) {
  return resposta !== null && resposta.trim() !== '';
}

// Função para validar idade (deve ser um número)
function validarIdade(idade) {
  return !isNaN(idade) && idade > 0;
}

//-------------------------- Separador -----------------------------//

alert('Seja bem-vindo à Pesquisa!');

// ** Criando interação com o usuário ** //

// Bloco Variavel-Loop Nome
while (!validarResposta(nome)) {
  nome = prompt('Qual é o seu nome?');
  if (!validarResposta(nome)) {
    alert('Por favor, insira um nome válido!');
  }
}
console.log('Identificação:', nome);

// Bloco Variavel-Loop Idade
while (!validarResposta(idade) || !validarIdade(idade)) {
  idade = prompt('Quantos anos você tem?');
  if (!validarResposta(idade)) {
    alert('Por favor, insira uma idade válida!');
  } else if (!validarIdade(idade)) {
    alert('A idade deve ser um número positivo!');
  }
}
console.log('Idade:', idade);

// Bloco Variavel-Loop Curso
while (!validarResposta(curso)) {
  curso = prompt('Qual linguagem de programação você está estudando?');
  if (!validarResposta(curso)) {
    alert('Por favor, insira o nome do curso!');
  }
}
console.log('Curso:', curso);

// Exibindo as informações coletadas
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${curso}!`);
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${curso}!`);

// Criando Condições
alert('Responda o questionário abaixo com "sim" ou "não"!');

// Pergunta sobre o curso
do {
  resposta = prompt('Está gostando do curso de ' + curso + '?').toLowerCase();
  if (resposta !== 'sim' && resposta !== 'não') {
    alert('Por favor, responda com "sim" ou "não".');
  }
} while (resposta !== 'sim' && resposta !== 'não');

// Resposta sobre o curso
if (resposta === 'sim') {
  alert('Muito bom! Continue estudando e você terá muito sucesso.');
  console.log('Muito bom! Continue estudando e você terá muito sucesso.');
} else {
  alert('Ahh que pena... Já tentou aprender outras linguagens?');
  console.log('Ahh que pena... Já tentou aprender outras linguagens?');

  // Segunda pergunta baseada na resposta 'não'
  do {
    nova_pergunta = prompt('Gostaria de receber recomendações de outras linguagens para estudar?');
    if (nova_resposta !== 'sim' && nova_resposta !== 'não') {
      alert('Por favor, responda com "sim" ou "não".');
    }
  } while (nova_resposta === 'sim' && nova_resposta === 'não');

  if (nova_resposta === 'sim') {
    alert('Acesse o site: "https://www.alura.com.br/cursos-online-programacao?c=carnatech" e saiba mais!');
    console.log('Acesse o site: "https://www.alura.com.br/cursos-online-programacao?c=carnatech" e saiba mais!');
  } else {
    alert('Tudo bem! Continue explorando a que mais te interessa.');
    console.log('Tudo bem! Continue explorando a que mais te interessa.');
  }
}

// Finalizando programa
alert(`Obrigado ${nome}, por responder nossa pesquisa, tenha um bom dia!`);
console.log(`Obrigado ${nome}, por responder nossa pesquisa, tenha um bom dia!`);
