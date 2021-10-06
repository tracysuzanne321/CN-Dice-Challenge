const diceDiv = document.querySelector('.dice-images');
const rollButton = document.querySelector('.roll-button');
const resetButton = document.querySelector('.reset-button');
let totalScore = document.querySelector('.total');
const scoreBoard = document.querySelector('.score-board');
let total = 0;
totalScore.innerHTML = 0;


let images = [];

 
function createImage(src, title) {
  let img   = new Image();
  img.src   = src;
  img.alt   = title;
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


rollButton.addEventListener('click', () => {
    diceDiv.style.animation = "dice-images 0.25s linear"
        setTimeout(() => {
            diceDiv.style.removeProperty('animation')
        }, 250)

  let score = Math.floor((Math.random() * 6) + 1);
  function printImage() {
	  diceDiv.innerHTML = ''; // this is a no-no
		diceDiv.appendChild(images[score]);
	}
  
  if (score > 0 && score < 7) {
    printImage();
  } 

  let ul = document.createElement('ul');
  let li = document.createElement('li');
   
  total = score + total;
  totalScore.innerHTML = total;
});


resetButton.addEventListener('click', () => {
  total = 0;
  totalScore.innerHTML = '0';
  diceDiv.innerHTML = ''; 
  diceDiv.appendChild(images[0]);
  scoreBoard.innerHTML = ''; 
});