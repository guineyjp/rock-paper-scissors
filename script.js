console.log("Hello Worlds");

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

function randomResultSimple() {
    const randomResult2 = Math.random();

if (randomResult2 <=0.33) {
    return "rock";
} else {
    return "scissors";
}
}

console.log(randomResultSimple());