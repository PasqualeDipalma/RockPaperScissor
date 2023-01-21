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

//Global variables
let roundsCount = 0;
let playerScore = 0;
let computerScore = 0;

/*
TO DO:
 - Make an animation with buttons to highlight what player selected
*/

//Game starts when player click on a button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
            let playerSelection = "";
            let computerSelection = getComputerChoice();
            let result = "";
            switch(button.className){
                case 'Paper':
                    playerSelection = 'Paper';
                    result = playRound(playerSelection, computerSelection);
                    displayRoundScore(result);
                    roundsCount++;
                    break;
                case 'Scissor':
                    playerSelection = 'Scissor';
                    result = playRound(playerSelection, computerSelection);
                    displayRoundScore(result);
                    roundsCount++;
                    break;
                case 'Rock':
                    playerSelection = 'Rock';
                    result = playRound(playerSelection, computerSelection);
                    displayRoundScore(result);
                    roundsCount++;
                    break;
            }
            checkNumberRounds(roundsCount);
    });
});

//Check number of round played
function checkNumberRounds(roundsCount){
    if(roundsCount == 5){
        displayWinner();
    }
}

/* TO DO:
    - Change all console.log into display scores in score-container
*/
function displayRoundScore(result){

    if(result.substring(7,10) != "Tie"){
        if(result.substring(3,8) == " Lose"){
            computerScore++;
        }else if(result.substring(3,8) == " Win!"){
            playerScore++;
        }
    }

    console.log(result);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Player score: ${playerScore}`);
    console.log("");
    
}


/*                              -------ADD------- 
When winners is displayed show a pop up to ask if player want to play again and reset
scores, couters and text in result box 
*/
function displayWinner() {
    if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins!");
    }
    if (playerScore == computerScore)
        console.log("It's a Tie!");
}
