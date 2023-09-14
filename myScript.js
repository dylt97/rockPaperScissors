let computerChoice;
let playerChoice;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        computerChoice = "rock";
    } else if (random === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let roundResult;

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Rock, Paper, or Scissors?", "Choose an Option!!");
    computerChoice = getComputerChoice();
    alert(`You Chose: ${playerChoice}!`);
    alert(`Your Opponent Chose: ${computerChoice}!`);

    let playerLowercase = playerChoice.toLowerCase();
   
    if (playerLowercase === computerChoice) {
        roundResult = `It's a tie! You both chose ${playerLowercase}!`;
        
    } else if (playerLowercase === "rock" && computerChoice === "scissors") {
        roundResult = "You win! Rock crushes scissors!";

    } else if (playerLowercase === "rock" && computerChoice === "paper") {
        roundResult = "You lose! Paper covers rock!";

    } else if (playerLowercase === "paper" && computerChoice === "rock") {
        roundResult = "You win! Paper covers rock!";

    } else if (playerLowercase === "paper" && computerChoice === "scissors") {
        roundResult = "You lose! Scissors cuts paper!";
        
    } else if (playerLowercase === "scissors" && computerChoice === "paper") {
        roundResult = "You win! Scissors cuts paper!";

    } else if (playerLowercase === "scissors" && computerChoice === "rock") {
        roundResult = "You lose! Rock crushes scissors!";

    } else {
        roundResult = "Invalid Selection! Please select rock, paper, or scissors!";
    }
    alert(`${roundResult}`);
    return roundResult;
}
