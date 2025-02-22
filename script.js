const wordDisplay = document.getElementById('word-display');
const inputField = document.getElementById('input-field');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

const words = ["apple", "banana", "orange", "grape", "watermelon", "strawberry", "kiwi", "blueberry", "peach", "pineapple"];
let currentWord = '';
let score = 0;
let time = 0;
let timerInterval;
let gameStarted = false;

startBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    time = 0;
    gameStarted = true;
    inputField.value = '';
    inputField.disabled = false;
    inputField.focus();
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${time}`;
    startBtn.disabled = true;
    generateNewWord();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (gameStarted) {
            time++;
            timerDisplay.textContent = `Time: ${time}`;
        }
    }, 1000);
}

function generateNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    wordDisplay.textContent = currentWord;
}

inputField.addEventListener('input', () => {
    const typedWord = inputField.value.trim();

    if (typedWord === currentWord) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        generateNewWord();
        inputField.value = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    inputField.disabled = true;
});
