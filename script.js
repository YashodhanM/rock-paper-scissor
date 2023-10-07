function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];
    let ranInt = Math.floor(Math.random() * 3);
    return(choice[ranInt]);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock!";
    }else if(playerSelection == "rock" && computerSelection == "scissor"){
        return "You win! Rock beats Scissor!";
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "You lose! Scissor beats paper!";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock!";
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "You lose! Rock beats scissor!";
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return "You win! Scissor beats paper!";
    }else{
        return "There was a tie!";
    }
}

function game(){
    let playerSelection = "";
    let computerSelection = "";
    let myResult = "";
    let playerCount = 0;
    let computerCount = 0;
    for(let i = 1; i <= 5; i++){
        playerSelection = prompt("Enter a value of you liking to beat the computer: ");
        computerSelection = getComputerChoice();
        myResult = playRound(playerSelection,computerSelection);
        console.log(myResult);
        if(myResult.includes("win")){
            playerCount += 1;
        }else if(myResult.includes("lose")){
            computerCount += 1;
        }else{
            playerCount += 0;
            computerCount += 0;
        }
    }

    console.log(`Player Wins: ${playerCount}`);
    console.log(`Computer Wins: ${computerCount}`);

    if(playerCount > computerCount){
        console.log("You Win this battle!!!");
    }else if(playerCount < computerCount){
        console.log("You lost this battle :(");
    }else{
        console.log("There was a tie!!!");
    }
}

game();