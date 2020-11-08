var choice = ["Rock", "Paper", "Scissors"];  
choice.forEach(Function1);
function Function1(item){
var btn = document.createElement("BUTTON");   
btn.classList.add("player_choice");                                
document.getElementById("div1").appendChild(btn).textContent +=  item ;
}
let playerChoice ="";
// console.log(playerChoice);
 const choicesButton=document.querySelectorAll(".player_choice");
 console.log(choicesButton);
 choicesButton.forEach(button=>{
    button.addEventListener("click",function(){
    document.getElementsByClassName("player")[0].innerHTML="";
    playerChoice=button.textContent;
    console.log(playerChoice);
    document.getElementsByClassName("player")[0].textContent += playerChoice ;
    
     })
 })
 
function Winner(player){

    let computer= choice[Math.floor(Math.random() * choice.length)];
    

    
    if (computer === player) {
       alert ("It's a tie!");
    }
    else if (computer === "Rock") {
        if (player === "Scissors") {
            
            alert ("you lose 😴!");
    
        } else {

            alert ("You win 💪!");
            alert ("It's a tie!");
        }
    }
    if (computer === "Paper") {
        if (player === "Rock") {
            
            alert ("You win 💪!");
        } else {
            alert ("you lose 😴!");
        }
    }
    if (computer === "Scissors") {
        if (player === "Rock") {
        
            alert ("You win 💪!");
            
        } else {
            
           alert ("you lose 😴!");
        }
    }
}
const play = document.getElementById("start");
console.log(play);
 play.addEventListener("click",function(){
    Winner(playerChoice);
    

 });
