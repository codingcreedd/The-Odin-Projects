function randomNumber(){
    return Math.floor(Math.random() * (3 - 1) + 1);
}

function getComputerChoice(){
    const random = randomNumber();
    return random;
}

function getPlayerSelection(){
    const player_selection = prompt('Rock, paper or scissors: ');
    let playerSelection;

    if(player_selection === 'Rock' || player_selection === 'rock' || player_selection === 'ROCK' || player_selection === 'RocK'){
        playerSelection = 1;
        return playerSelection;
    }
    else if(player_selection === 'Paper' || player_selection === 'paper' || player_selection === 'PAPER'){
        playerSelection = 2;
        return playerSelection;
    }
    else if( player_selection === 'Scissors' || player_selection === 'scissors' || player_selection === 'SCISSORS'){
        playerSelection = 3;
        return playerSelection;
    }
    
}

function compare(computerChoice, playerChoice){
    if(computerChoice === 1){
        if(playerChoice === 1)
        {
            return 'Tie';
        }else if(playerChoice === 2){
            return 'Player Wins';
        }else{
            return 'Computer Wins';
        }
    }else if(computerChoice === 2){
        if(playerChoice === 1)
        {
            return 'Computer Wins';
        }else if(playerChoice === 2){
            return 'Tie';
        }else{
            return 'Player Wins';
        }
    }else{
        if(playerChoice === 1)
        {
            return 'Player Wins';
        }else if(playerChoice === 2){
            return 'Computer Wins';
        }else{
            return 'Tie';
        }
    }
}


function game(){
    let playerScore = 0, computerScore = 0;
    const rounds = 5;
    let remaining_rounds = rounds;
    let result;

    let computerChoice, playerChoice;
    for(let i = 0; i < rounds; i++)
    {
        if(Math.abs(playerScore - computerScore) > remaining_rounds)
        {
            if(playerScore > computerScore){
                alert('You Win!');
            }
            else{
                alert('You lose!');
            }
            break;
        }

        computerChoice = getComputerChoice();
        playerChoice = getPlayerSelection();
        result = compare(computerChoice, playerChoice);

        if(result === 'Tie'){
            i--;
        }else if(result === 'Player Wins'){
            playerScore++;
        }else{
            computerScore++;
        }

        alert(`${result} -> You ${playerChoice} x ${computerChoice} Computer \nScore: You ${playerScore} - ${computerScore} Computer`);

        remaining_rounds--;
    }

    if(playerScore > computerScore)
        alert('You win!');
    else
        alert('You lose!');
}

game();