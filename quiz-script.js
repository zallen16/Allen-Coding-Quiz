// generateBtn.addEventListener("click", );


var questions = [
    {
        question: "What languge is jQuery used in?",
        answers: [
            {text: "JavaScript", correct: true},
            {text: "HTML", correct: false},
            {text: "CSS", correct: false},
            {text: "Assembly", correct: false},
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            {text: "Document Object Model", correct: true},
            {text: "Don't Order Marinara", correct: false},
            {text: "Dad's Only Magic", correct: false},
            {text: "Do Orangutans Mussitate?", correct: false},
        ]
    },
    {
        question: "Which character indicates an array?",
        answers: [
            {text: "()", correct: false},
            {text: "[]", correct: true},
            {text: "{}", correct: false},
            {text: "/", correct: false},
        ]
    },
    {
        question: "This is going to be question 4",
        answers: [
            {text: "Option 1", correct: true},
            {text: "Option 2", correct: false},
            {text: "Option 3", correct: false},
            {text: "Option 4", correct: false},
        ]
    },
    {
        question: "This is going to be question 5",
        answers: [
            {text: "Option 1", correct: true},
            {text: "Option 2", correct: false},
            {text: "Option 3", correct: false},
            {text: "Option 4", correct: false},
        ]
    }
];

var answerOption = document.getElementById("answer-options");
var startButton = document.getElementById('startquiz');
var welcomeDiv = document.querySelector('.card');
var quizDiv = document.querySelector('.quiz');
var questionH1 = document.querySelector('#question');
var answerButtons = document.querySelectorAll('.answer-btn');
const timerEl = document.getElementById('timer');

startButton.addEventListener('click', runQuiz)

var currentQuestionIndex = 0;
var score = 60;
var timer = 0;

function runQuiz(){
    console.log('Started')
    welcomeDiv.classList.add('hidden')
    quizDiv.classList.remove('hidden')
    // execute timer function here
    // execute showQuestion function here
    startTimer()
    showQuestion()
};

function showQuestion(){
    // apply current question & answer options to quizDiv
    questionH1.textContent=questions[currentQuestionIndex].question
    for (var i=0; i<questions[currentQuestionIndex].answers.length; i++){
        answerButtons[i].textContent=questions[currentQuestionIndex].answers[i].text
        answerButtons[i].value=questions[currentQuestionIndex].answers[i].correct
        answerButtons[i].onclick=selectAnswer;
    }
}

function selectAnswer() {
    // if answer is wrong, subtract time off clock
    console.log("correct");

    // check value for true or false before moving on to next question
    
    currentQuestionIndex++
    showQuestion()
}

function startTimer () {
    // set interval method to create timer
    timer = 60;
    var timerId = setInterval(() => {
        if(timer>0) {
            timerEl.textContent=timer
            timer--
        } else {
            timerEl.textContent="--"
            
            clearInterval(timerId)
        }

    }, 1000)
}

const startingMinutes = 1;
let time = startingMinutes * 60;



// setInterval(updateCountdown, 1000);

// function updateCountDown () {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     countdownEl.innerHTML = '${minutes}: ${seconds}';
//     time--;
// }