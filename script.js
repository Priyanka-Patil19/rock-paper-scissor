let userScore=0;
let computerScore=0;
let count=0;

const userScore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const reset_button=document.getElementsByClassName("reset");

function getComputerChoice(){
    const choice=["Rock","Paper","Scissors"];
    const randomNumber=Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function game(userChoice){
    if(count<5)
    {
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case "pRock":
        case "sPaper":
        case "rScissors":
            document.getElementById("win").innerHTML="Computer chose "+computerChoice +". YOU Win !!!!!"
            userScore++;
            document.getElementById("user-score").innerHTML=userScore;
            break;

        case "rPaper":
        case "pScissors":
        case "sRock":
            document.getElementById("win").innerHTML="Computer chose "+computerChoice +". YOU lose !!!!!"
            computerScore++;
            document.getElementById("computer-score").innerHTML=computerScore;
            break;

        case "pPaper":
        case "sScissore":
        case "rRock":
            document.getElementById("win").innerHTML="Computer made the same move. Draw!";
            break;
        }
        count++;
    }
    else{
        if(userScore > computerScore){
            document.getElementById("win").innerHTML="YOU WIN  !!!!! \n Start the new Game ->Click on Reset Button !!!!!";
           
        }else if(userScore < computerScore){
            
            document.getElementById("Win").innerHTML="COMPUTER WIN !!!!!\n Start the new Game ->Click on Reset Button !!!!!";
        }else if(userScore == computerScore){
           
            document.getElementById("Win").innerHTML="TIEY!!!!!\n Start the new Game ->Click on Reset Button !!!!!";
        }
        //resetScore();
        //document.getElementById("Win").innerHTML="Start the new Game ->Click on Reset Button !!!!!"
    }
}

function resetScore(){
    userScore = 0;
    computerScore=0;
    count=0;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

function main(){
        
        rock_div.addEventListener('click',function(){

            game("r");
        })
        
        paper_div.addEventListener('click',function(){
            game("p");
        })
        
        scissor_div.addEventListener('click',function(){
            game("s");
        })  
}

main();