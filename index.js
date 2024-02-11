const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: [
        "Rio de Janeiro",
        "São Paulo",
        "Brasília"
      ],
      correta: 2 // Resposta correta: Brasília
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: [
        "Oceano Atlântico",
        "Oceano Índico",
        "Oceano Pacífico"
      ],
      correta: 2 // Resposta correta: Oceano Pacífico
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      respostas: [
        "William Shakespeare",
        "Miguel de Cervantes",
        "Charles Dickens"
      ],
      correta: 1 // Resposta correta: Miguel de Cervantes
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        "Júpiter",
        "Terra",
        "Saturno"
      ],
      correta: 0 // Resposta correta: Júpiter
    },
    {
      pergunta: "Qual é a capital da França?",
      respostas: [
        "Londres",
        "Madri",
        "Paris"
      ],
      correta: 2 // Resposta correta: Paris
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      respostas: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh"
      ],
      correta: 0 // Resposta correta: Leonardo da Vinci
    },
    {
      pergunta: "Quantos continentes existem?",
      respostas: [
        "5",
        "6",
        "7"
      ],
      correta: 2 // Resposta correta: 7
    },
    {
      pergunta: "Qual é a capital do Japão?",
      respostas: [
        "Pequim",
        "Tóquio",
        "Seul"
      ],
      correta: 1 // Resposta correta: Tóquio
    },
    {
      pergunta: "Quem foi o primeiro homem a pisar na lua?",
      respostas: [
        "Neil Armstrong",
        "Buzz Aldrin",
        "Yuri Gagarin"
      ],
      correta: 0 // Resposta correta: Neil Armstrong
    },
    {
      pergunta: "Qual é o metal mais abundante na crosta terrestre?",
      respostas: [
        "Ferro",
        "Alumínio",
        "Ouro"
      ],
      correta: 1 // Resposta correta: Alumínio
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