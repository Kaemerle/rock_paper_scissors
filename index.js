const computerSelection = computerPlay();
let playerSelection = 'roCK'
playerSelection = playerSelection.toLowerCase()



function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice;
}



function playRound(playerSelection, computerPlay)