const computerSelection = computerPlay();
let playerSelection = prompt('Choose: rock, paper, or scissors!', 'Pick one!')
playerSelection = playerSelection.toLowerCase()
let playerWin = 0
let computerWin = 0
let tieGame = 0
let roundWinner = ''



function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(`The computer used ${choice}`)
    return choice;
}



function playRound(playerSelection, computerSelection) {
    // if its a tie, the tieGame tally is marked up
    if (playerSelection === computerSelection) {
        console.log('Its a tie. Play again!');
        roundWinner = 'none'
        result = roundWinner
        // the results of when the user picks rock
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log(`${playerSelection} loses to ${computerSelection}! You lose!`);
            roundWinner = 'computer'
            result = roundWinner 
        } else if (computerSelection === 'scissors') {
            console.log(`${computerSelection} loses to ${playerSelection}! You win!`)
            roundWinner = 'player'
            result = roundWinner 
        } 
        // the results of when the uses picks paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(`${playerSelection} beats ${computerSelection}! You win!`);
            roundWinner = 'player'
            result = roundWinner 
        } else if (computerSelection === 'scissors') {
            console.log(`${computerSelection} beats ${playerSelection}! You lose!`)
            roundWinner = 'computer'
            result = roundWinner 
        } 
        // the results of when the user picks scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log(`${playerSelection} beats ${computerSelection}! You win!`);
            roundWinner = 'player'
            result = roundWinner 
        } else if (computerSelection === 'rock') {
            console.log(`${computerSelection} beats ${playerSelection}! You lose!`)
            roundWinner = 'computer'
            result = roundWinner 
        } 
    }
}

function game() {
    let playerWin = 0 
    let computerWin = 0
    let tieGame = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose: rock, paper, or scissors!', 'Pick one!')
    playerSelection = playerSelection.toLowerCase()
    computerPlay()
    playRound(playerSelection, computerSelection)
    if (result === 'none') {
        tieGame++
        console.log(`Tie game count: ${tieGame}`);
    } else if (result === 'player') {
        playerWin++
        console.log(`Player win game count: ${playerWin}`);
    } else if (result === 'computer') {
        computerWin++
        console.log(`Computer win game count: ${computerWin}`);
    }
    }
}

