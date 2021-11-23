const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    //assing the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
    if (currentTime === 0) {
        clearInterval(timerMoveId);
    }
}

square.forEach(elements => {
    elements.addEventListener('mouseup', () => {
        if (elements.id === hitPosition && currentTime != 0) {
            result++;
            score.textContent = result;
        }
    });
});

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    console.log(currentTime);
    if (currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
        if (confirm('Play again?')) {
            gameRunning();
        }
    }
}

function gameRunning() {
    timeLeft.textContent = 30;
    currentTime = timeLeft.textContent;
    timerId = setInterval(countDown, 1000);
    result = 0;
    score.textContent = result;
}

let timerMoveId = setInterval(randomSquare, 500);
let timerId = setInterval(countDown, 500);