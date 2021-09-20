var userChoice;
var computerChoice;
var u = 0;
var c = 0;
var userScore = document.getElementById("user-score");
var computerScore = document.getElementById("computer-score");

document.querySelector("#scissor").addEventListener("click", () => {
    document.querySelector("#img3").style.display = "block";
    document.getElementById("scissor").disabled = true;
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    userChoice = "scissor";
    computerTurn();
    resultOfGame();
})

document.querySelector("#rock").addEventListener("click", () => {
    document.querySelector("#img2").style.display = "block";
    document.getElementById("rock").disabled = true;
    document.getElementById("scissor").disabled = true;
    document.getElementById("paper").disabled = true;
    userChoice = "rock";
    computerTurn();
    resultOfGame();
})

document.querySelector("#paper").addEventListener("click", () => {
    document.querySelector("#img1").style.display = "block";
    document.getElementById("rock").disabled = true;
    document.getElementById("scissor").disabled = true;
    document.getElementById("paper").disabled = true;
    userChoice = "paper";
    computerTurn();
    resultOfGame();
})

function computerTurn(){
    var randomNum = Math.floor(Math.random()*3)+1;
    if( randomNum===1 ){
        document.querySelector("#img5").style.display = "block";
        computerChoice = "rock";
    }
    else if( randomNum===2 ){
        document.querySelector("#img4").style.display = "block";
        computerChoice = "scissor";
    }
    else if( randomNum==3 ){
        document.querySelector("#img6").style.display = "block";
        computerChoice = "paper";
    }
}

function resultOfGame(){
    counter();
    if( userChoice==="rock" ){
        if( computerChoice==="scissor" ){
            document.querySelector("#result").innerHTML = "Congrats ! You win";
            document.querySelector("#result").hidden = false;
        }
        else if(computerChoice==="rock"){
            document.querySelector("#result").innerHTML = "It is a draw";
            document.querySelector("#result").hidden = false;
        }
        else{
            document.querySelector("#result").innerHTML = "Computer wins, you lost !";
            document.querySelector("#result").hidden = false;
        }
    }
    else if( userChoice==="paper" ){
        if( computerChoice==="rock" ){
            document.querySelector("#result").innerHTML = "Congrats ! You win";
            document.querySelector("#result").hidden = false;
        }
        else if(computerChoice==="paper"){
            document.querySelector("#result").innerHTML = "It is a draw";
            document.querySelector("#result").hidden = false;
        }
        else{
            document.querySelector("#result").innerHTML = "Computer wins, you lost !";
            document.querySelector("#result").hidden = false;        
        } 
    }
    else{
        if( computerChoice==="paper" ){
            document.querySelector("#result").innerHTML = "Congrats ! You win";
            document.querySelector("#result").hidden = false;
        }
        else if(computerChoice==="scissor"){
            document.querySelector("#result").innerHTML = "It is a draw";
            document.querySelector("#result").hidden = false;
        }
        else{
            document.querySelector("#result").innerHTML = "Computer wins, you lost !";
            document.querySelector("#result").hidden = false;
        } 
    }
}

function playAgain(){
    document.querySelector("#img3").style.display = "none";
    document.querySelector("#img2").style.display = "none";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#img4").style.display = "none";
    document.querySelector("#img5").style.display = "none";
    document.querySelector("#img6").style.display = "none";

    document.querySelector("#result").hidden = true;

    document.getElementById("rock").disabled = false;
    document.getElementById("scissor").disabled = false;
    document.getElementById("paper").disabled = false;

}

function resetGame(){
    u = 0;
    c = 0;
    userScore.innerHTML = u;
    computerScore.innerHTML = c;
    playAgain();
}


function counter(){
    if( userChoice=="rock" && computerChoice=="scissor" ){
        u = u+1;
        userScore.innerHTML = u;
    }
    else if( userChoice=="paper" && computerChoice=="rock" ){
        u = u+1;
        userScore.innerHTML = u;
    }
    else if( userChoice=="scissor" && computerChoice=="paper" ){
        u = u+1;
        userScore.innerHTML = u;
    }
    else if( userChoice=="rock" && computerChoice=="paper" ){
        c = c+1;
        computerScore.innerHTML = c;
    }
    else if( userChoice=="paper" && computerChoice=="scissor" ){
        c = c+1;
        computerScore.innerHTML = c;
    }
    else if( userChoice=="scissor" && computerChoice=="rock" ){
        c = c+1;
        computerScore.innerHTML = c;
    }
}


