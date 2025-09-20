console.log("Hello Worlds");

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

console.log(getComputerChoice());

//Now creating the human side of the game

let getHumanChoice = prompt("Choose Your Weapon", "Enter Rock, Paper or Scissors");
