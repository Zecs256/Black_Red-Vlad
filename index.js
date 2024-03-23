const redBtn = document.getElementById("redBtn");
const blackBtn = document.getElementById("blackBtn");
const result = document.getElementById("result");
const cardRobot = document.getElementById("cardRobot");
const stringBudget = document.getElementById("budget");

const add50 = document.getElementById("add50");
const add100 = document.getElementById("add100");
const add150 = document.getElementById("add150");

const min = 1;
const max = 2;

let robotCard;
let playerCard;
let playerBudget = 0;

add50.onclick = function(){
  playerBudget = playerBudget + 50;
  stringBudget.textContent = playerBudget + "$";
}

add100.onclick = function(){
  playerBudget = playerBudget + 100;
  stringBudget.textContent = playerBudget + "$";
}

add150.onclick = function(){
  playerBudget = playerBudget + 150;
  stringBudget.textContent = playerBudget + "$";
}

redBtn.onclick = function(){
  playerCard = 1;
  robotCard = Math.floor(Math.random() * max) + min;
  
  if(robotCard == 1){
    cardRobot.classList.add("red-color");
  } 
  else if(robotCard == 2){
    cardRobot.classList.add("black-color");
  }

  if(playerCard === robotCard){
    result.textContent = `You have won`;
    stringBudget.textContent = playerBudget + 50;
    playerBudget = Number(stringBudget.textContent);
  } else {
    result.textContent = `You have lost`;
    stringBudget.textContent = playerBudget - 50;
    playerBudget = Number(stringBudget.textContent);
  }

  setTimeout(function() {
    cardRobot.classList.remove("red-color", "black-color");
    result.textContent = `Play Again`;
}, 750);
}


blackBtn.onclick = function(){
  playerCard = 2;
  robotCard = Math.floor(Math.random() * max) + min;
  
  if(robotCard == 1){
    cardRobot.classList.add("red-color");
  } 
  else if(robotCard == 2){
    cardRobot.classList.add("black-color");
  }

  if(playerCard === robotCard){
    result.textContent = `You have won`;
    stringBudget.textContent = playerBudget + 50;
    playerBudget = Number(stringBudget.textContent);
  } else {
    result.textContent = `You have lost`;
    stringBudget.textContent = playerBudget - 50;
    playerBudget = Number(stringBudget.textContent);
  }

  setTimeout(function() {
    cardRobot.classList.remove("red-color", "black-color");
    result.textContent = `Play Again`;
}, 750);
}
