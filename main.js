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
    choice = prompt("Let's play Rock, Paper, Scissors!");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("Tie!")
            tie++;
        } else if (humanChoice === "rock" && computerChoice == "scissors") {
            console.log("Rock beats Scissors! You Win!")
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Paper beats Rock! You Win!")
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice === "paper") {
            console.log("Scissors beats Paper! You Win!")
            humanScore++;
        } else if (computerChoice === "rock" && humanChoice == "scissors") {
            console.log("Rock beats Scissors! You Lose!")
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("Paper beats Rock! You Lose!")
            computerScore++;
        } else if (computerChoice == "scissors" && humanChoice === "paper") {
            console.log("Scissors beats Paper! You Lose!")
            computerScore++;
        }
    }

    for (i = 0; i < 5; i++) {
        playRound();
    }
    console.log("You: " + humanScore + " | Computer: " + computerScore + " | Ties: " + tie);
    if (humanScore > computerScore) {
        console.log("Congratulations, You Won!")
    } else if (computerScore > humanScore) {
        console.log("Sorry! You Lost!");
    } else (console.log("It's a tie!"));
}

playGame();