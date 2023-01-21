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


//Game starts when player click on a button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
            let playerSelection = "";
            let computerSelection = getComputerChoice();
            let result = "";
            switch(button.className){
                case 'Paper':
                    highlightButton(button.className)
                    playerSelection = 'Paper';
                    result = playRound(playerSelection, computerSelection);
                    displayRoundScore(result);
                    roundsCount++;
                    break;
                case 'Scissor':
                    highlightButton(button.className)
                    playerSelection = 'Scissor';
                    result = playRound(playerSelection, computerSelection);
                    displayRoundScore(result);
                    roundsCount++;
                    break;
                case 'Rock':
                    highlightButton(button.className)
                    playerSelection = 'Rock';
                    result = playRound(playerSelection, computerSelection);
                    displayRoundScore(result);
                    roundsCount++;
                    break;
            }
            const image1 = document.querySelector(`.${button.className} img`);
            image1.addEventListener('transitionend', removeTransition);
            checkNumberRounds(roundsCount);
    });
}
);

//Remove the highlight
function removeTransition(e){
    if(e.propertyName !== 'transform')
        return;
    this.classList.remove('selected');
}

//Highlight button when clicked
function highlightButton(buttonClassName){
    const image = document.querySelector(`.${buttonClassName} img`);
    image.classList.add('selected');
    image.addEventListener('transitionend', removeTransition);
}


//Check number of round played
function checkNumberRounds(roundsCount){
    if(roundsCount == 5){
        displayWinner();
    }
}

//Display scores
function displayRoundScore(result){

    if(result.substring(7,10) != "Tie"){
        if(result.substring(3,8) == " Lose"){
            computerScore++;
        }else if(result.substring(3,8) == " Win!"){
            playerScore++;
        }
    }

    const roundWinner = document.querySelector('.round-result');
    roundWinner.textContent = result;

    const cpuScore = document.querySelector('.computer-score .score-box');
    cpuScore.textContent = computerScore;

    const plyScore = document.querySelector('.player-score .score-box');
    plyScore.textContent = playerScore;
    
}

//Reset scores counters
function resetScoreCounters() {
    const cpuScore = document.querySelector('.computer-score .score-box');
    cpuScore.textContent = '0';

    const plyScore = document.querySelector('.player-score .score-box');
    plyScore.textContent = '0';
}



//Display winner and ask if player wants to play again
function displayWinner() {

    const body = document.querySelector('.body-container');

    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    body.appendChild(popUp);

    const popupDiv = document.querySelector('.popup');

    const popupHeader = document.createElement('div');
    popupHeader.classList.add('popup-header');

    if (playerScore > computerScore) {
        popupHeader.textContent = 'Player Wins!';
    } else if (playerScore < computerScore) {
        popupHeader.textContent = 'Computer Wins!';
    }
    if (playerScore == computerScore)
        popupHeader.textContent = 'It\'s a Tie!';

    popupDiv.appendChild(popupHeader);

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup-body');
    popupBody.textContent = 'Do you want to play again?';
    popupDiv.appendChild(popupBody);

    const bodyContainer = document.querySelector('.popup-body');

    const button = document.createElement('button');
    button.classList.add('play-again-button');
    button.textContent = 'Play Again';
    

    const bodyBox = document.querySelector('body');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');


    button.addEventListener('click', () => {
        roundsCount = 0;
        playerScore = 0;
        computerScore = 0;
        resetScoreCounters();
        body.removeChild(popupDiv);
        bodyBox.removeChild(overlay);
    });

    bodyContainer.appendChild(button);
    bodyBox.appendChild(overlay);

}
