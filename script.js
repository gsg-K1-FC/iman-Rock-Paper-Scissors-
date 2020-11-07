var choice = ["Rock", "Paper", "Scissors"];  
choice.forEach(Function1);
function Function1(){
var btn = document.createElement("BUTTON");   
btn.innerHTML = "index";                                
document.getElementById("div1").appendChild(btn);
}
var player = prompt("Let's GOoOOOoOo");
if (! player) {
    
    document.alret("should chose one of these optiones  " );
} else {
    
    document.write("<p> player choice:" + " " + player+ "</p>" );
}
function computerChoice (){
var computer= choice[Math.floor(Math.random() * choice.length)];

        // Display computer choice
        document.write("<p>Computer choice:" + " " + computer+ "</p>");
}
var win = function(computerChoice,player){
    if (computer === player) {
        return "It's a tie!";
    }
    if (computer === "rock") {
        if (player === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (computer === "paper") {
        if (player === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (computer === "scissors") {
        if (player === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};


var results = compare(computer,player);


document.write(win);