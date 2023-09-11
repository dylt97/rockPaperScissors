function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (random === 1) {
        computerChoice = "Rock";
    } else if (random === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}