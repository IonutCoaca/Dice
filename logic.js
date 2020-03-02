function getRandomInt(){
    return Math.floor(Math.random(2) * Math.floor(6))+1
 }
 
 var playerOne = getRandomInt()
 var playerTwo = getRandomInt()
 
 
 var linkPlayerOne = "images/"+ playerOne.toString() +".png"
 var linkPlayerTwo = "images/"+ playerTwo.toString() +".png"
 
 document.getElementsByClassName("dice")[0].firstElementChild.setAttribute("src",linkPlayerOne)
 document.getElementsByClassName("dice")[1].firstElementChild.setAttribute("src",linkPlayerTwo)
 
 
 if(playerOne > playerTwo){
     document.getElementsByClassName("titleHeadder")[0].innerHTML='<i class="fas fa-trophy"></i>The winner is Player ONE'
 }else if (playerOne < playerTwo){
     document.getElementsByClassName("titleHeadder")[0].innerHTML='<i class="fas fa-trophy"></i>The winner is Player TWO'
 }else{
     document.getElementsByClassName("titleHeadder")[0].innerHTML="It's a draw, reroll the dices"
 }