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
let winLoseOrTie;
let winResult = "You win!";
let tieResult = "It's a tie!";
let loseResult = "You lose!";

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Rock, Paper, or Scissors?", "Choose an Option!!");
    computerChoice = getComputerChoice();
    alert(`You Chose: ${playerChoice}!`);
    alert(`Your Opponent Chose: ${computerChoice}!`);

    let playerLowercase = playerChoice.toLowerCase();
   
    if (playerLowercase === computerChoice) {
        winLoseOrTie = tieResult;
        roundResult = `${winLoseOrTie} You both chose ${playerLowercase}!`;
        
    } else if (playerLowercase === "rock" && computerChoice === "scissors") {
        winLoseOrTie = winResult;
        roundResult = `${winLoseOrTie} Rock crushes scissors!`;

    } else if (playerLowercase === "rock" && computerChoice === "paper") {
        winLoseOrTie = loseResult;
        roundResult = `${winLoseOrTie} Paper covers rock!`;

    } else if (playerLowercase === "paper" && computerChoice === "rock") {
        winLoseOrTie = winResult;
        roundResult = `${winLoseOrTie} Paper covers rock!`;

    } else if (playerLowercase === "paper" && computerChoice === "scissors") {
        winLoseOrTie = loseResult;
        roundResult = `${winLoseOrTie} Scissors cuts paper!`;
        
    } else if (playerLowercase === "scissors" && computerChoice === "paper") {
        winLoseOrTie = winResult;
        roundResult = `${winLoseOrTie} Scissors cuts paper!`;

    } else if (playerLowercase === "scissors" && computerChoice === "rock") {
        winLoseOrTie = loseResult;
        roundResult = `${winLoseOrTie} Rock crushes scissors!`;

    } else {
        roundResult = "Invalid Selection! Please select rock, paper, or scissors!";
    }
    alert(`${roundResult}`);

    if (winLoseOrTie === winResult) {
        playerScore += 1;
    } else if (winLoseOrTie === loseResult) {
        computerScore += 1;
    }

    return roundResult;
}

let playerScore;
let computerScore;

function game() {
    playerScore = 0;
    computerScore = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore > computerScore) {
        return `You scored: ${playerScore}. Your opponent scored: ${computerScore}. Congratulations You Win!`;
    } else if (playerScore === computerScore) {
        return `You scored: ${playerScore}. Your opponent scored: ${computerScore}. It's a Tie!`;
    } else if (playerScore < computerScore) {
        return `You scored: ${playerScore}. Your opponent scored: ${computerScore}. Sorry You Lose!`;
    }
}