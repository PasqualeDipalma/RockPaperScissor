function getRandomInt(){
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    let choice = ['Rock', 'Paper', 'Scissor'];
    let random = getRandomInt();
    return choice[random];
}

function getPlayerChoice(){
    let playerChoice = prompt("Type your choice:");
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection){

    console.log(`Computer choice is: ${computerSelection}`);
    console.log(`Player choice is: ${playerSelection}`);

    if(playerSelection === computerSelection)
        return `It's a Tie! You both played ${playerSelection}`

    if(playerSelection === "Paper" && computerSelection === "Rock")
        return "You Win! Paper beats Rock";

    if(playerSelection === "Paper" && computerSelection === "Scissor")
        return "You Lose! Scissor beats Paper";
    
    if(playerSelection === "Rock" && computerSelection === "Paper")
        return "You Lose! Paper beats Rock";
    

    if(playerSelection === "Rock" && computerSelection === "Scissor")
        return "You Win! Rock beats Scissor";
    

    if(playerSelection === "Scissor" && computerSelection === "Rock")
        return "You Lose! Rock beats Scissor";
    

    if(playerSelection === "Scissor" && computerSelection === "Paper")
        return "You Win! Scissor beats Paper";
    
}

function game(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(playerSelection, computerSelection);

        if(roundResult.substring(7,10) != "Tie"){
            if(roundResult.substring(3,8) == " Lose"){
                computerScore++;
            }else if(roundResult.substring(3,8) == " Win!"){
                playerScore++;
            }
        }

        console.log(roundResult);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Player score: ${playerScore}`);
        console.log("");
        if(i != 4){
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
        }
    }
    if(playerScore > computerScore){
        console.log("Player Wins!");
    }else if(playerScore < computerScore){
        console.log("Computer Wins!");
    }
    if(playerScore == computerScore)
        console.log("It's a Tie!");
}


game();