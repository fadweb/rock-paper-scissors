function getComputerChoice() {
    let cpu = Math.floor(Math.random() * 3);
    if (cpu === 0) {
        return "rock";
    } else if (cpu === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(choice) {
    choice = prompt("Rock, Paper or Scissors!");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;
    function playRound() {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        console.log("You chose " + human + "!");
        console.log("Computer chose " + computer + "!");

        if (human === computer) {
            return "It's a tie!"
        } else if ((human === "rock" && computer == "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human == "scissors" && computer === "paper")) {
            return "You win!"
        } else {
            return "You lose!"
        }
    }

    for (i = 0; i < 5; i++){
        const result = playRound();
        console.log(result);

        if (result === "You win!"){
            humanScore++;
        }else if (result === "You lose!"){
            computerScore++;
        }else{
            tie++;
        }
    }
    
    console.log("You: " + humanScore + " | Computer: " + computerScore + " | Ties: " + tie);
}

playGame();