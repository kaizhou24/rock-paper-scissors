console.log("Hello, World!");

/*
Write code that randomly returns rock, paper, or scissors.
Write code that allows users to make a choice.
Write code that tracks score.
Write code to determine the winner of a single round.
Write code to determine the winner of the entire game.
*/

function getComputerChoice(){
   switch(Math.floor(Math.random() * 3) + 1){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
   }
}

function getHumanChoice(){
    let user_input = prompt("Rock, Paper, or Scissors?");
    return user_input
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")){
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        return true;
    } else if((humanChoice === computerChoice)){
        console.log(`${humanChoice} and ${computerChoice} is a draw!`);
        return null;
    } else {
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        return false;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    while ((humanScore < 3) && (computerScore < 3)){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice)
        if(result === true){
            humanScore++;
        } else if (result === null){
            //draw condition
        } else {
            computerScore++;
        }
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();