var choice = ["Rock", "Paper", "Scissors"];  
choice.forEach(Function1);
function Function1(item){
var btn = document.createElement("BUTTON");   
btn.classList.add("player_choice");                                
document.getElementById("div1").appendChild(btn).textContent +=  item ;
}
let playerChoice ="";
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
    document.getElementsByClassName('computer')[0].innerHTML = computer;
    let H1 = document.createElement('H1');
    let resultt =document.getElementById('resultt');
    resultt.appendChild(H1);
    

    if (!player) {
        alert('you should choose!');
        return;
      }
     
    if (computer === player) {
        resultt.innerHTML="It's a tie!";
       return;
    }
    else if (computer === "Rock") {
        if (player === "Scissors") {
            
           resultt.innerHTML= "you lose 😴!";
    
        } else {

            resultt.innerHTML="You win 💪!";
            
        }
    }
    if (computer === "Paper") {
        if (player === "Rock") {
            
            resultt.innerHTML= "You lose 😴!";
        } else {
            resultt.innerHTML="you win 💪!";
        }
    }
    if (computer === "Scissors") {
        if (player === "Rock") {
        
            resultt.innerHTML="you win 💪!";
            
        } else {
            
            resultt.innerHTML= "You lose 😴!";
        }
    }
}
const play = document.getElementById("start");
 play.addEventListener("click",function(){
    Winner(playerChoice);
    console.log(Winner(playerChoice));

 });
