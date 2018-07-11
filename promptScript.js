var a = ["Rock", "Paper", "Scissors"];
var playerPoints = 0;
var computerPoints = 0;

function computerPlay() {
    var i = Math.floor(Math.random() * 3);
    return a[i];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Draw";
    }
    var win = playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper";
    if(win) {
        playerPoints++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerPoints++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    var set = "";
    for(var i = 0; i < 5; i++) {
        var player = prompt(set);
        player = player.charAt(0).toUpperCase() + player.substr(1).toLowerCase();
        set = playRound(player, computerPlay()) + "\nPlayer: " + playerPoints + " Computer: " + computerPoints;
    }
    if(playerPoints > computerPoints) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}

game();
