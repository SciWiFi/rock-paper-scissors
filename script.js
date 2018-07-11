var a = ["Rock", "Paper", "Scissors"];
var res = document.querySelector("#results");
var computerSelection = "";
var playerSelection = "";
var buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerSelection = a[button.id];
        var winner = "";
        computerSelection = computerPlay();
        if(computerSelection == playerSelection) {
            winner = "draw";
        }
        var win = playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper";
        if(win) {
            winner = "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if(!win && !(computerSelection == playerSelection)) {
            winner = "You lose! " + computerSelection + " beats " + playerSelection;
        }
        showWinner(winner);
    });
});

function showWinner(text) {
    res.textContent = text;
}

function computerPlay() {
    var i = Math.floor(Math.random() * 3);
    return a[i];
}