const wordDisplay = document.getElementById('word-display');
const inputField = document.getElementById('input-field');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

const words = ["apple", "banana", "orange", "grape", "watermelon", "strawberry", "kiwi", "blueberry", "peach", "pineapple"];
let currentWord = '';
let score = 0;
let time = 0;
let gameStarted = false;
let timerInterval;

function startGame() {
    score = 0;
    time = 0;
    gameStarted = true;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${time}`;
    inputField.value = '';
    inputField.disabled = false;
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
    if (!gameStarted) startGame();

    const typedWord = inputField.value.trim();
    
    if (typedWord === currentWord) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        generateNewWord();
        inputField.value = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    inputField.disabled = true; // Disable input until game starts
});
