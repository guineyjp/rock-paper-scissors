console.log("Hello World");

/*creating a function that generates a random number, then using if else if statement to return rock, paper or scissors
depending on the result of that function
*/

function getComputerChoice() {
    const randomComputerResult = Math.random();

    if (randomComputerResult <= 0.33) {
        return "rock";
    } else if (randomComputerResult >0.33 && randomComputerResult <=0.66) {
        return "paper";
    }
     else {
        return "scissors";
    }
}

const computerPick = getComputerChoice();

//Now creating the human side of the game

function getHumanChoice() {
    let humanChoice = prompt("Choose Your Weapon", "Rock, Paper or Scissors");
    return humanChoice;
}


//now need to write variables to keep track of player scores

let humanScore = 0 ;
let computerScore = 0;

/*creating function playRound to play first round, need to create arguments that take human choices
and computer choice as arguments
*/


function playGame(humanChoice, computerChoice) {

    //showing choices by both players
    console.log("Human Choice is:", humanChoice);
    console.log("Computer Choice is:", computerChoice);

    function playRound(humanChoice, computerChoice) {
    //making human input and computer input lower case in case of variation in input
   let humanChoiceLower = humanChoice.toLowerCase;
   let computerChoiceLower = computerChoice.toLowerCase();

   console.log(humanChoiceLower);
   console.log(computerChoiceLower);


   //comparing results of human vs computer to determine winner

   if (humanChoiceLower === computerChoiceLower) {
        return "It's a Draw! Let's play again"
   } else if(
    (humanChoiceLower === "rock" && computerChoiceLower === "scissors") ||
    (humanChoiceLower === "scissors" && computerChoiceLower === "paper") ||
    (humanChoiceLower === "paper" && computerChoiceLower === "rock")
   ) {
    return "You've won! Play again?"
   }

   else {
    return "The Computer has won! Hard Luck, maybe try again!"
   }

}
}


//calling playGame function to start the game
playGame(getHumanChoice(), getComputerChoice());
