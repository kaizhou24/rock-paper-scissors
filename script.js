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