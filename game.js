const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: '	Who said, "Hey, I could call my ma from up here!"?',
        choice1: 'Mayor Quimby',
        choice2: 'Ralph Wiggum',
        choice3: 'Bart Simpson',
        choice4: "Cletus",
        answer: 4,
    },
    {
        question:
            "What club from Springfield Elementary got stranded on an island?",
        choice1: "Book Club",
        choice2: "Travel Club",
        choice3: "UN Club",
        choice4: "SH Club",
        answer: 3,
    },
    {
        question: "What did Homer name his baseball bat in season 3?",
        choice1: "Super Bat",
        choice2: "Base Buster",
        choice3: "Ball Biter",
        choice4: "Wonder Bat",
        answer: 4,
    },
    {
        question: "What did Krusty write as his signature when he was signing autographs for his book?",
        choice1: "KC",
        choice2: "K the C",
        choice3: "Krustmeister",
        choice4: "Klu Klux Klown",
        answer: 2,
    },
    {
        question: "What is Patty and Selma's favorite TV show?",
        choice1: "Jerry Springer",
        choice2: "Seinfeld",
        choice3: "MacGyver",
        choice4: "The Tonight Show",
        answer: 3,
    },
    {
        question: "	Patty and Selma suggested changing Springfield's name to what?",
        choice1: 'Sparkling Springs Field',
        choice2: 'Seinfeld',
        choice3: 'Spring Hill',
        choice4: 'Stink Town',
        answer: 2,
    },
    {
        question:
            "How did Fallout Boy get his super powers in the Radioactive Man movie?",
        choice1: "X-Ray Machine",
        choice2: "Nuclear Fallout",
        choice3: "An Atomic Bomb",
        choice4: "The Plague",
        answer: 1,
    },
    {
        question: "What is the name of the tiger owned by the two circus guys?",
        choice1: "Sheeba",
        choice2: "Anastatia",
        choice3: "Bridgit",
        choice4: "Samantha",
        answer: 2,
    },
    {
        question: "Who is the superintendant of Springfield Elementary?",
        choice1: "Skinner",
        choice2: "Burke",
        choice3: "Chalmers",
        choice4: "Frink",
        answer: 3,
    },
    {
        question: "What code did Homer say he was 'so sick of' on Valentines Day?",
        choice1: "Stonecutter's code",
        choice2: "Florist's code",
        choice3: "Sky writer's code",
        choice4: "Binary Code",
        answer: 3,
    },
    {
        question: '	Who said, "...You might even say I hate the post office. That and my parents, lousy beatnics..."',
        choice1: 'Homer',
        choice2: 'Moe',
        choice3: 'Ned',
        choice4: "Homer's Mother",
        answer: 3,
    },
    {
        question:
            "Who hosts the TV show 'SmartLine'?",
        choice1: "Krusty the Clown",
        choice2: "Roger Myers Jr",
        choice3: "The Spanish Bee",
        choice4: "Kent Brockman",
        answer: 4,
    },
    {
        question: "What was the name of Moe's family restaurant?",
        choice1: "Moe's Family Restaurant",
        choice2: "Moe's Food Hole",
        choice3: "Uncle Moe's Family Feedbag",
        choice4: "Chef Moe's Delicacy Delight",
        answer: 3,
    },
    {
        question: "Who said,'On your way out, if you wanna kill somebody, it would help me a lot?'",
        choice1: "Fat Tony",
        choice2: "Chief Wiggum",
        choice3: "Hank Scorpio",
        choice4: "None of the above.",
        answer: 3,
    },
    {
        question: "Bart and which two other boys bought 'Radioactive Man' ?",
        choice1: "Nelson and Milhouse",
        choice2: "Milhouse and Martin",
        choice3: "Jimbo and Nelson",
        choice4: "Martin and Jimbo",
        answer: 2,
    },
    {
        question: '	What nick name did Milhouse choose while playing the video game Bonestorm?',
        choice1: 'Bone Crusher',
        choice2: 'Mr. Dud',
        choice3: 'Thrillhouse',
        choice4: 'Millhouse',
        answer: 3,
    },
    {
        question:
            "What letters on the sun dial did Mr. Burns point to when he got shot?",
        choice1: "E and W",
        choice2: "M and S",
        choice3: "N and E",
        choice4: "W and S",
        answer: 4,
    },
    {
        question: "Who said, 'No one cares about your stupid dinosaur bands!'?",
        choice1: "Milhouse",
        choice2: "Homer",
        choice3: "Bart",
        choice4: "Nelson",
        answer: 3,
    },
    {
        question: "What disease did Bart get from the trash pile?",
        choice1: "Measels",
        choice2: "Flu",
        choice3: "Plague",
        choice4: "Cancer",
        answer: 3,
    },
    {
        question: "According to Homer, what is the 'cause of, and solution to, all of life's problems?'",
        choice1: "Sickness",
        choice2: "Vegetables",
        choice3: "Beef",
        choice4: "Alcohol",
        answer: 4,
    },
    {
        question: '	Who sleeps "on top of a pile of money with many beautiful ladies?"',
        choice1: 'Mr. Burns',
        choice2: 'Rainier Wolfcastle',
        choice3: 'Joe Quimby',
        choice4: 'Jay Sherman',
        answer: 2,
    },
    {
        question:
            "The tallest building in the world is located in which city?",
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanghai",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "Who bought Snake's sports car L'il Bandit?",
        choice1: "Marge",
        choice2: "Flanders",
        choice3: "Homer",
        choice4: "Otto",
        answer: 3,
    },
    {
        question: "When Bart and Lisa wrote an Itchy & Scratchy cartoon, who's name did they put on it?",
        choice1: "Homer's",
        choice2: "Marge's",
        choice3: "Grampa Simpson's",
        choice4: "Maggie's",
        answer: 3,
    },
    {
        question: "What football team was Homer given by Hank Scorpio?",
        choice1: "The Dallas Cowboys",
        choice2: "The Denver Broncos",
        choice3: "The Miami Dolphins",
        choice4: "The Greenbay Packers",
        answer: 2,
    },
    {
        question: '	Which of these shows was on the Simpsons Spin-Off Showcase episode?',
        choice1: "Apu's Security Videos, Revealed",
        choice2: 'Wiggum, PI',
        choice3: 'Love-Matic Baby',
        choice4: 'All of the above',
        answer: 2,
    },
    {
        question:
            "What did Yale ask Mr. Burns to donate?",
        choice1: "A football field",
        choice2: "A rocket launch facility",
        choice3: "An international airport",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "When the Simpsons moved to Cypress Creek, who was Homer's boss?",
        choice1: "Mr. Excon",
        choice2: "Mr. Burns",
        choice3: "Mr. Scorpio",
        choice4: "Mr. Excelion",
        answer: 3,
    },
    {
        question: "Who is Mr. Burns' son?",
        choice1: "Larry",
        choice2: "Sonny",
        choice3: "Jim",
        choice4: "Monty",
        answer: 1,
    },
    {
        question: "Who was Lisa's favorite substitute teacher?",
        choice1: "Ms Krabapple",
        choice2: "Mr Bergstrom",
        choice3: "Mrs Hoover",
        choice4: "Mr Chalmers",
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 30

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()