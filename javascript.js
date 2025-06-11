console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());
const div = document.querySelector("div");

function playRound (humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    div.innerHTML = `<p>You chose ${humanChoice}. Computer chose ${computerChoice}.</p>`;
    
    if (humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }

    if(humanChoice === computerChoice){
        div.innerHTML += "<p>its a tie.</p>";
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        div.innerHTML += "<p>You lose! Scissors beats paper.</p>";
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        div.innerHTML += "<p>You lose! Rock beats scissors.</p>";
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        div.innerHTML += "<p>You lose! Paper beats rock.</p>";
        computerScore++;
    }else{
        div.innerHTML += "<p>You win!</p>";
        humanScore++;
    };

    div.innerHTML+= `<p>human:${humanScore}. computer:${computerScore}</p>`;
    
    if(humanScore == 5){
        div.innerHTML+=`<p>You won the game!</p>`;
    }else if(computerScore == 5){
        div.innerHTML+=`<p>Computer won the game!</p>`;
    }
};

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");


rockBtn.addEventListener("click", ()=> playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click", ()=> playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click", ()=> playRound("scissors",getComputerChoice()));
