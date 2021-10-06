const diceDiv = document.querySelector('.dice-images');
const rollButton = document.querySelector('.roll-button');
const resetButton = document.querySelector('.reset-button');
let totalScore = document.querySelector('.total');
const scoreBoard = document.querySelector('.score-board');
const loseWinText = document.getElementById('lose-win-text');
const player = document.getElementById('player');
let total = 0;
totalScore.innerHTML = 0;
let currentPlayer = 1;

let images = [];


function createImage(src, title) {
    let img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    return img;
};


images.push(createImage('http://www.clker.com/cliparts/a/d/q/R/f/9/blank-dice-md.png', 'Blank Die Face'));
images.push(createImage('http://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-md.png', 'Side One of Die'));
images.push(createImage('http://www.clker.com/cliparts/l/f/6/l/H/A/dice-2-md.png', 'Side Two of Die'));
images.push(createImage('http://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png', 'Side Three of Die'));
images.push(createImage('http://www.clker.com/cliparts/r/z/d/a/L/V/dice-4-md.png', 'Side Four of Die'));
images.push(createImage('http://www.clker.com/cliparts/e/y/7/h/W/K/dice-5-md.png', 'Side Five of Die'));
images.push(createImage('http://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-md.png', 'Side Six of Die'));


diceDiv.appendChild(images[0]);

function rollDice() {
    return Math.floor((Math.random() * 6) + 1)
}

function rollAnimation() {
    diceDiv.style.animation = "dice-images 0.25s linear"
    setTimeout(() => {
        diceDiv.style.removeProperty('animation')
    }, 250)
}

function printImage(score) {
    diceDiv.innerHTML = '';
    diceDiv.appendChild(images[score]);
}

function checkWinOrLoss(score) {
    if (score === 1) {
        loseWinText.innerHTML = 'You Lose!';
        rollButton.style.visibility = "hidden";
    } else if (total >= 20) {
        loseWinText.innerHTML = 'You Win!';
        rollButton.style.visibility = "hidden";
    }
}

function changePlayer() {
    if (currentPlayer == 1) {
        currentPlayer = 2;
    } else {
        currentPlayer = 1
    }
    player.innerHTML = `Player ${currentPlayer}`
}

rollButton.addEventListener('click', () => {
    rollAnimation()
    let score = rollDice();
    printImage(score);
    total = score + total;
    totalScore.innerHTML = total;
    checkWinOrLoss(score);
});



resetButton.addEventListener('click', () => {
    changePlayer();
    loseWinText.innerHTML = '';
    rollButton.style.visibility = "visible";
    total = 0;
    totalScore.innerHTML = '0';
    diceDiv.innerHTML = '';
    diceDiv.appendChild(images[0]);
    scoreBoard.innerHTML = '';
});