var a = ["Rock", "Paper", "Scissors"];
var res = document.querySelector("#results");
var round = 0;
var roundDiv = document.querySelector("#roundDiv");
var computerSelection = "";
var playerSelection = "";
var buttons = document.querySelectorAll(".play"); //document.querySelectorAll("button");
var points = document.querySelector("#points");
var playerPoints = 0;
var computerPoints = 0;
var winner = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerSelection = a[button.id];
        computerSelection = computerPlay();
        if(computerSelection == playerSelection) {
            winnerText = "draw";
            winner = "";
        }
        var win = playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper";
        if(win) {
            winnerText = "You win! " + playerSelection + " beats " + computerSelection;
            winner = "p";
            playerPoints++;
        }
        else if(!win && !(computerSelection == playerSelection)) {
            winnerText = "You lose! " + computerSelection + " beats " + playerSelection;
            winner = "c";
            computerPoints++;
        }
        round++;
        showWinner(winnerText);
    });
});

function showWinner(text) {
    //res.textContent = text + "\n" + res.textContent;
    if(winner == "") {
    	res.innerHTML = "<p>" + text + "</p>" + res.innerHTML;
    }
    else if(winner == "p") {
    	res.innerHTML = "<p class='won'>" + text + "</p>" + res.innerHTML;
    }
    else if(winner == "c") {
    	res.innerHTML = "<p class='lose'>" + text + "</p>" + res.innerHTML;
    }
    roundDiv.innerHTML = "Round: " + round;
    points.innerHTML = "You: " + playerPoints + " Computer: " + computerPoints;
}

function computerPlay() {
    var i = Math.floor(Math.random() * 3);
    return a[i];
}