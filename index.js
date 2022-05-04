"use strict";

const computerSelection = computerPlay();
let playerSelection = '';
let playerWin = 0
let computerWin = 0
let tieGame = 0

const player = document.querySelector('#player');
const winner = document.querySelector('#winner');
const computer = document.querySelector('#computer');  
const tie = document.querySelector('#tie');
const selected = document.querySelector('.selected');
const result = document.querySelector('.result');

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');

rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay())
});
paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay())
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors',computerPlay())
});



function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // if its a tie, the tieGame tally is marked up
    if (playerSelection === computerSelection) {
        selected.textContent = `You both chose ${computerSelection}`
        winner.textContent = `Its a tie! Try again!`
        tieGame++
        tie.textContent = `Tie games: ${tieGame}`
        
        // the results of when the user picks rock
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            selected.textContent = `The computer chose paper!`
            winner.textContent = `${playerSelection} loses to ${computerSelection}! You lose this round!`;
            computerWin++ 
            computer.textContent = `Computer wins: ${computerWin}`

        } else if (computerSelection === 'scissors') {
            selected.textContent = `The computer chose scissors!`
            winner.textContent = `${computerSelection} loses to ${playerSelection}! You win this round!`;
            playerWin++ 
            player.textContent = `Your wins: ${playerWin}`
        } 
        // the results of when the uses picks paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            selected.textContent = `The computer chose rock!`
            winner.textContent = `${playerSelection} beats ${computerSelection}! You win this round!`;
            playerWin++
            player.textContent = `Your wins: ${playerWin}`

        } else if (computerSelection === 'scissors') {
            selected.textContent = `The computer chose scissors!`
            winner.textContent = `${computerSelection} beats ${playerSelection}! You lose this round!`;
            computerWin++ 
            computer.textContent = `Computer wins: ${computerWin}`
        } 
        // the results of when the user picks scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            selected.textContent = `The computer chose paper!`
            winner.textContent = `${playerSelection} beats ${computerSelection}! You win this round!`;
            playerWin++
            player.textContent = `Your wins: ${playerWin}`

        } else if (computerSelection === 'rock') {
            selected.textContent = `The computer chose rock!`
            winner.textContent = `${computerSelection} beats ${playerSelection}! You lose this round!`;
            computerWin++
            computer.textContent = `Computer wins: ${computerWin}`
        } 
    }

    if(computerWin == 5) {
        result.textContent = `Game over! You lose!`
        return
    } else if(playerWin == 5) {
        result.textContent = `Game over! You win!`
        return
    }
}














