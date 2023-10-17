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
const winResult = "You win!";
const tieResult = "It's a tie!";
const loseResult = "You lose!";

function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();

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

    }

    if (winLoseOrTie === winResult) {
        playerScore += 1;
    } else if (winLoseOrTie === loseResult) {
        computerScore += 1;
    }

    playerScoreBox.textContent = `Player Score: ${playerScore}`;
    computerScoreBox.textContent = `Computer Score: ${computerScore}`;

    return roundResult;
}

let playerScore = 0;
let computerScore = 0;

let resultsBox = document.querySelector('div#result');

const rockBtn = document.querySelector('button#rock');
rockBtn.addEventListener('click', function() {
    playRound('rock', computerChoice);
    resultsBox.textContent = roundResult;
});

const paperBtn = document.querySelector('button#paper');
paperBtn.addEventListener('click', function() {
    playRound('paper', computerChoice);
    resultsBox.textContent = roundResult;
});

const scissorsBtn = document.querySelector('button#scissors');
scissorsBtn.addEventListener('click', function() {
    playRound('scissors', computerChoice);
    resultsBox.textContent = roundResult;
});

let playerScoreBox = document.querySelector('span.playerScoreBox');
let computerScoreBox = document.querySelector('span.computerScoreBox');
