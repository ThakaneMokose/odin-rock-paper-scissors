console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


/*const getHumanChoice = () => {
    const choice = prompt("Please enter rock, paper, or scissors:");
    return choice;
}
console.log(getHumanChoice());*/

function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());
const div = document.querySelector("div");

function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    div.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.  `;
    if(humanChoice === computerChoice){
        div.textContent += "its a tie.";
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        div.textContent += "You lose! Scissors beats paper.";
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        div.textContent += "You lose! Rock beats scissors.";
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        div.textContent += "You lose! Paper beats rock.";
        computerScore++;
    }else{
        div.textContent += "You win!!!";
        humanScore++;
    }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");


rockBtn.addEventListener("click", ()=> playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click", ()=> playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click", ()=> playRound("scissors",getComputerChoice()));
