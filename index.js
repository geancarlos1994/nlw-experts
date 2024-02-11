const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "const minhaVariavel",
        "var minhaVariavel",
        "let minhaVariavel"
      ],
      correta: 2 // A resposta correta é a terceira opção (let minhaVariavel)
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()"
      ],
      correta: 0 // A resposta correta é a primeira opção (push())
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores quanto ao seu valor e tipo",
        "Compara dois valores apenas quanto ao seu valor",
        "Compara dois valores apenas quanto ao seu tipo"
      ],
      correta: 0 // A resposta correta é a primeira opção (Compara dois valores quanto ao seu valor e tipo)
    },
    {
      pergunta: "Como você pode converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()"
      ],
      correta: 0 // A resposta correta é a primeira opção (parseInt())
    },
    {
      pergunta: "Qual é o símbolo para comentários de linha única em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->"
      ],
      correta: 0 // A resposta correta é a primeira opção (//)
    },
    {
      pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()"
      ],
      correta: 0 // A resposta correta é a primeira opção (pop())
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Remover um ouvinte de eventos de um elemento HTML",
        "Alterar um ouvinte de eventos de um elemento HTML"
      ],
      correta: 0 // A resposta correta é a primeira opção (Adicionar um ouvinte de eventos a um elemento HTML)
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
      respostas: [
        "/* Este é um comentário de várias linhas */",
        "// Este é um comentário de várias linhas //",
        "<!-- Este é um comentário de várias linhas -->"
      ],
      correta: 0 // A resposta correta é a primeira opção (/* Este é um comentário de várias linhas */)
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Formata um número com um número fixo de casas decimais",
        "Remove as casas decimais de um número",
        "Arredonda um número para o inteiro mais próximo"
      ],
      correta: 0 // A resposta correta é a primeira opção (Formata um número com um número fixo de casas decimais)
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de dado de uma variável",
        "Compara dois valores",
        "Converte um valor para uma string"
      ],
      correta: 0 // A resposta correta é a primeira opção (Retorna o tipo de dado de uma variável)
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }