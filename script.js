generateBtn.addEventListener("click", );

var questions = [
    {
        question: "This is going to be question 1",
        answers: [
            {text: "Option 1", correct: true},
            {text: "Option 2", correct: false},
            {text: "Option 3", correct: false},
            {text: "Option 4", correct: false},
        ]
    },
    {
        question: "This is going to be question 2",
        answers: [
            {text: "Option 1", correct: true},
            {text: "Option 2", correct: false},
            {text: "Option 3", correct: false},
            {text: "Option 4", correct: false},
        ]
    },
    {
        question: "This is going to be question 3",
        answers: [
            {text: "Option 1", correct: true},
            {text: "Option 2", correct: false},
            {text: "Option 3", correct: false},
            {text: "Option 4", correct: false},
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
var startButton = document.getElementById('start-btn');

startButton.addEventListener('click', runQuiz)

var currentQuestionIndex = 0;
var score = 60;

function runQuiz(){
    console.log('Started')
};

function showQuestion(){

}

function selectAnswer() {

}

