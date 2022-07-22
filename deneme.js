const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playerchoice = document.getElementById("player-choice")
const computerchoice = document.getElementById("computer-choice")
const result = document.getElementById("result")

const choices = ["Rock", "Paper", "Scissors"]

rock.onclick = function () {
    playerchoice.innerHTML = "Rock"
    const random = Math.floor(Math.random() * choices.length)
    computerchoice.innerHTML = choices[random]
    if (((computerchoice.innerHTML === "Rock") && (playerchoice.innerHTML === "Rock")) || ((computerchoice.innerHTML === "Paper") && (playerchoice.innerHTML === "Paper")) || ((computerchoice.innerHTML === "Scissors") && (playerchoice.innerHTML === "Scissors"))) {
        result.innerHTML = "It's Draw"
    }
    else if((computerchoice.innerHTML==="Rock"&&playerchoice.innerHTML==="Scissors")||(computerchoice.innerHTML==="Paper"&&playerchoice.innerHTML==="Rock")||(computerchoice.innerHTML==="Scissors"&&playerchoice.innerHTML==="Paper")){
        result.innerHTML="Computer Wins!"
    }
    else if((playerchoice.innerHTML==="Rock"&&computerchoice.innerHTML==="Scissors")||(playerchoice.innerHTML==="Paper"&&computerchoice.innerHTML==="Rock")||(playerchoice.innerHTML==="Scissors"&&computerchoice.innerHTML==="Paper")){
        result.innerHTML="Player Wins!"
    }
    

}
paper.onclick = function () {
    playerchoice.innerHTML = "Paper"
    const random = Math.floor(Math.random() * choices.length)
    computerchoice.innerHTML = choices[random]
    if (((computerchoice.innerHTML === "Rock") && (playerchoice.innerHTML === "Rock")) || ((computerchoice.innerHTML === "Paper") && (playerchoice.innerHTML === "Paper")) || ((computerchoice.innerHTML === "Scissors") && (playerchoice.innerHTML === "Scissors"))) {
        result.innerHTML = "It's Draw"
    }
    else if((computerchoice.innerHTML==="Rock"&&playerchoice.innerHTML==="Scissors")||(computerchoice.innerHTML==="Paper"&&playerchoice.innerHTML==="Rock")||(computerchoice.innerHTML==="Scissors"&&playerchoice.innerHTML==="Paper")){
        result.innerHTML="Computer Wins!"
    }
    else if((playerchoice.innerHTML==="Rock"&&computerchoice.innerHTML==="Scissors")||(playerchoice.innerHTML==="Paper"&&computerchoice.innerHTML==="Rock")||(playerchoice.innerHTML==="Scissors"&&computerchoice.innerHTML==="Paper")){
        result.innerHTML="Player Wins!"
    }
}
scissors.onclick = function () {
    playerchoice.innerHTML = "Scissors"
    const random = Math.floor(Math.random() * choices.length)
    computerchoice.innerHTML = choices[random]
    if (((computerchoice.innerHTML === "Rock") && (playerchoice.innerHTML === "Rock")) || ((computerchoice.innerHTML === "Paper") && (playerchoice.innerHTML === "Paper")) || ((computerchoice.innerHTML === "Scissors") && (playerchoice.innerHTML === "Scissors"))) {
        result.innerHTML = "It's Draw"
    }
    else if((computerchoice.innerHTML==="Rock"&&playerchoice.innerHTML==="Scissors")||(computerchoice.innerHTML==="Paper"&&playerchoice.innerHTML==="Rock")||(computerchoice.innerHTML==="Scissors"&&playerchoice.innerHTML==="Paper")){
        result.innerHTML="Computer Wins!"
    }
    else if((playerchoice.innerHTML==="Rock"&&computerchoice.innerHTML==="Scissors")||(playerchoice.innerHTML==="Paper"&&computerchoice.innerHTML==="Rock")||(playerchoice.innerHTML==="Scissors"&&computerchoice.innerHTML==="Paper")){
        result.innerHTML="Player Wins!"
    }
}


