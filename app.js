<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fast Typing Game</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        #word { font-size: 2em; margin: 20px; }
        #input { font-size: 1.2em; padding: 5px; }
        #timer, #result { margin: 20px; font-size: 1.2em; }
        #startBtn { padding: 10px 20px; font-size: 1em; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Fast Typing Game</h1>
    <div id="word">Press Start to Begin</div>
    <input type="text" id="input" disabled placeholder="Type here...">
    <div id="timer">Time: 0s</div>
    <div id="result"></div>
    <button id="startBtn">Start</button>

    <script>
        const easyWords = ["cat", "dog", "fish", "bird", "tree", "sun", "moon", "star", "book", "pen"];
        const mediumWords = ["jungle", "planet", "rocket", "giraffe", "laptop", "mountain", "picture", "holiday", "library", "adventure"];
        const hardWords = ["encyclopedia", "philosophy", "extraordinary", "revolutionary", "transformation", "hypothetical", "biotechnology", "metamorphosis", "psychological", "characteristics"];

        let allWords = [...easyWords, ...mediumWords, ...hardWords];
        let currentWord = "", startTime, timerInterval, wordIndex = 0;

        const wordEl = document.getElementById('word');
        const inputEl = document.getElementById('input');
        const timerEl = document.getElementById('timer');
        const resultEl = document.getElementById('result');
        const startBtn = document.getElementById('startBtn');

        startBtn.addEventListener('click', startGame);

        function startGame() {
            wordIndex = 0;
            inputEl.value = "";
            inputEl.disabled = false;
            inputEl.focus();
            resultEl.textContent = "";
            startTime = new Date();
            shuffleWords();
            showWord();
            timerInterval = setInterval(updateTimer, 100);
        }

        function shuffleWords() {
            allWords = allWords.sort(() => Math.random() - 0.5);
        }

        function showWord() {
            if (wordIndex < easyWords.length) {
                currentWord = easyWords[wordIndex % easyWords.length];
            } else if (wordIndex < easyWords.length + mediumWords.length) {
                currentWord = mediumWords[wordIndex % mediumWords.length];
            } else {
                currentWord = hardWords[wordIndex % hardWords.length];
            }
            wordEl.textContent = currentWord;
        }

        inputEl.addEventListener('input', () => {
            if (inputEl.value === currentWord) {
                wordIndex++;
                inputEl.value = "";
                if (wordIndex < allWords.length) {
                    showWord();
                } else {
                    endGame();
                }
            }
        });

        function updateTimer() {
            const currentTime = new Date();
            const elapsed = ((currentTime - startTime) / 1000).toFixed(1);
            timerEl.textContent = `Time: ${elapsed}s`;
        }

        function endGame() {
            clearInterval(timerInterval);
            const totalTime = ((new Date() - startTime) / 1000).toFixed(1);
            resultEl.textContent = `Finished! Your time: ${totalTime}s`;
            inputEl.disabled = true;
            setTimeout(() => {
                if (confirm("Do you want to play again?")) {
                    startGame();
                }
            }, 500);
        }
    </script>
</body>
</html>
