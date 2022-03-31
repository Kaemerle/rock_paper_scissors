let options = ["rock", "paper", "scissors"];
let choice = options[Math.floor(Math.random() * options.length)];
const computerSelection = computerPlay();
let playerSelection = 'ROCK'

playerSelection = playerSelection.toLowerCase()



function computerPlay() {
    console.log(choice)
    return choice;
}



function playRound(playerSelection, computerPlay) {
    if ((playerSelection === 'rock') && (computerPlay === 'scissors')) {
        console.log('You win, rock beats scissors!');
        return "Winner";
    } else if ((playerSelection === 'rock') && (computerPlay === 'paper')) {
        console.log('You lose, paper beats rock!');
        return "Loser";
    } else if ((playerSelection === 'rock') && (computerPlay === 'rock')) {
        console.log('Its a tie, play another round!');
        return "Tie";
    } else if ((playerSelection === 'paper') && (computerPlay === 'scissors')) {
        console.log('You lose, scissors beats paper!');
        return "Loser";
    } else if ((playerSelection === 'paper') && (computerPlay === 'paper')) {
        console.log('Its a tie, play another round');
        return "Tie";
    } else if ((playerSelection === 'paper') && (computerPlay === 'rock')) {
        console.log('You win, paper beats rock!');
        return "Winner";
    } else if ((playerSelection === 'scissors') && (computerPlay === 'rock')) {
        console.log('You lose, rock beats scissors!');
        return "Loser";
    } else if ((playerSelection === 'scissors') && (computerPlay === 'scissors')) {
        console.log('Its a tie, play another round!');
        return "Tie";
    } else if ((playerSelection === 'scissors') && (computerPlay === 'paper')) {
        console.log('You win, scissors beats scissors!');
        return "Winner";
    } else {
        console.log('Something went very wrong');
    }
}

function game() {

}

console.log(playRound(playerSelection, computerSelection));
