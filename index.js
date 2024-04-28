    const perguntas = [
    {
        pergunta: "Qual é o primeiro passo para garantir a segurança em uma cirurgia?",
        respostas: [
            "Verificar se o bisturi está afiado.",
            "Confirmar a identidade do paciente e o procedimento a ser realizado.",
            "Escolher o tipo de anestesia.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a lista de verificação de cirurgia segura?",
        respostas: [
            "Uma lista de compras para os materiais cirúrgicos.",
            "Um documento com os nomes dos profissionais envolvidos na cirurgia.",
            "Uma lista de itens essenciais a serem verificados antes, durante e após a cirurgia.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função da equipe de cirurgia segura?",
        respostas: [
            "Preparar o paciente para a cirurgia.",
            "Realizar a cirurgia.",
            "Garantir que todos os protocolos de segurança sejam seguidos.",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa 'time out' durante uma cirurgia?",
        respostas: [
            "O momento em que o cirurgião tira um intervalo para descanso.",
            "A pausa para verificar a identidade do paciente, o procedimento e o local da cirurgia.",
            "O momento em que a equipe celebra o sucesso da cirurgia.",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são os principais riscos de uma cirurgia?",
        respostas: [
            "Ficar com cicatrizes.",
            "Infecção e complicações.",
            "Hematomas temporários.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é profilaxia antibiótica?",
        respostas: [
            "O uso de antibióticos após a cirurgia.",
            "A prevenção de infecções por meio do uso de antibióticos antes da cirurgia.",
            "A aplicação de antibióticos diretamente na ferida cirúrgica.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a importância da higienização das mãos na cirurgia?",
        respostas: [
            "Não é importante, pois as luvas protegem contra germes.",
            "Reduzir o risco de infecções.",
            "Manter as mãos aquecidas durante a cirurgia.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é trombose venosa profunda?",
        respostas: [
            "Uma complicação comum após a cirurgia.",
            "A formação de coágulos sanguíneos nas veias profundas das pernas.",
            "Uma técnica cirúrgica para tratar varizes.",
        ],
        correta: 1
    },
    {
        pergunta: "Quando deve ser feita a marcação do local da cirurgia?",
        respostas: [
            "Durante a cirurgia.",
            "No dia anterior à cirurgia.",
            "Antes do paciente entrar na sala de cirurgia.",
        ],
        correta: 2
    },
    {
        pergunta: "O que é anestesia geral?",
        respostas: [
            "Apenas uma parte do corpo é anestesiada.",
            "O paciente fica completamente inconsciente durante a cirurgia.",
            "O paciente recebe apenas sedação leve.",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)

            if (estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}