console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


const getHumanChoice = () => {
    const choice = prompt("Please enter rock, paper, or scissors:");
    return choice;
}
console.log(getHumanChoice());

function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        return "its a tie.";
    }
    if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
    if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }else{
        console.log("You win!!!");
        humanScore++;
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}
playGame();