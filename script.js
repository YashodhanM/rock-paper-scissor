function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];
    let ranInt = Math.floor(Math.random() * 3);
    return(choice[ranInt]);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats Rock!");
    }else if(playerSelection == "rock" && computerSelection == "scissor"){
        console.log("You Win! Rock beats Scissor!");
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose! Scissor beats paper!");
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats rock!");
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        console.log("You lose! Rock beats scissor!");
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        console.log("You Win! Scissor beats paper!");
    }else{
        console.log("There was a tie!");
    }
}

function game(){
    let playerSelection = "";
    let computerSelection = "";
    for(let i = 1; i <= 5; i++){
        playerSelection = prompt("Enter a value of you liking to beat the computer: ");
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }

}

game();