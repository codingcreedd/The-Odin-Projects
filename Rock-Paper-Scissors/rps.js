function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(){
    return getRandomNumber(1, 3);
}

function getPlayerSelection(){
    const player_selection = prompt('Rock, paper or scissors: ');

    if(player_selection === 'Rock' || player_selection === 'rock' || player_selection === 'ROCK' || player_selection === 'RocK')
        return 1;
    else if(player_selection === 'Paper' || player_selection === 'paper' || player_selection === 'PAPER')
        return 2;
    else if( player_selection === 'Scissors' || player_selection === 'scissors' || player_selection === 'SCISSORS')
        return 3;
    
}

function compareChoices(computerChoice, playerChoice){
    
    switch (computerChoice) {
    case 1:
        switch (playerChoice) {
            case 1:
                return 'Tie';
            case 2:
                return 'Player Wins';
            default:
                return 'Computer Wins';
        }
        break;

    case 2:
        switch (playerChoice) {
            case 1:
                return 'Computer Wins';
            case 2:
                return 'Tie';
            default:
                return 'Player Wins';
        }
        break;

    default:
        switch (playerChoice) {
            case 1:
                return 'Player Wins';
            case 2:
                return 'Computer Wins';
            default:
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
        result = compareChoices(computerChoice, playerChoice);

        if(result === 'Tie'){
            rounds++;
            remaining_rounds++;
        }else if(result === 'Player Wins'){
            playerScore++;
        }else{
            computerScore++;
        }

        console.log(`${result} -> You ${playerChoice} x ${computerChoice} Computer \nScore: You ${playerScore} - ${computerScore} Computer`);

        remaining_rounds--;
    }
}

game();