const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choice");
let player;
let computer;
let result;

choiceBtns.forEach(need);
function need(submit) {
    submit.addEventListener("click", essen)
    function essen() {
        player = submit.textContent;
        computerTurn();
        setTimeout(Disply,500);
        function Disply() {
            playerText.textContent = `Player:${player}`;
            computerText.textContent = `Computer:${computer}`;
            resultText.textContent = resultNow();
        }
        
    }
}

function computerTurn(){
    const ram = Math.floor(Math.random()*3)+1;
    switch(ram){
        case 1:
            computer = "ROCK"; 
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;   
    }
}
function resultNow(){
    if(player == computer){
        return "DRAW"
    }
    else if(computer == "ROCK"){
        return (player == "PAPER")? "YOU WIN!" : "YOU LOSE :("
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE :("
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE :(";
    }
}
