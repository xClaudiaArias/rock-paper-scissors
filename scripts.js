

let user_choice = ""

// Comp choice 
const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    let comp_choice = choices[Math.floor(Math.random() * choices.length)]
    return comp_choice
}


let playerSelection = document.querySelectorAll('.uc').forEach(btn => {
    btn.addEventListener('click', (e) => {
        return e.target.value
    })
})

let computerSelection = getComputerChoice()
let updateUserScore = document.getElementById("user-score");
let updateCompScore = document.getElementById("computer-score");
let userScore = parseInt(updateUserScore.innerHTML);
let computerScore = parseInt(updateCompScore.innerHTML);
let announceWin = document.getElementById("winner-container")
let rounds = 5

const playRound = (playerSelection) => {

    if ((computerScore + userScore) <= rounds) {
        rounds -= 1
        if (computerSelection === 'rock' && playerSelection === 'rock') {
            console.log(`${computerSelection} is the same as ${playerSelection }: Its a tie!`)
            console.log("tie")
            return "tie"
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            console.log(`${playerSelection} beats ${computerSelection}: Player wins!`)
            userScore += 1
            console.log("computerScore ", computerScore , "userScore ", userScore)
            return updateUserScore.innerHTML = userScore.toString()
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            console.log(`${computerSelection} beats ${playerSelection}: Computer wins!`)
            computerScore += 1
            console.log("computerScore ", computerScore , "userScore ", userScore)
            return updateCompScore.innerHTML  = computerScore.toString()
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log(`${computerSelection} beats ${playerSelection}: Computer wins!`)
            computerScore += 1
            console.log("computerScore ", computerScore , "userScore ", userScore)
            return updateCompScore.innerHTML  = computerScore.toString()
        } else if (computerSelection === 'paper' && playerSelection === 'paper') {
            console.log(`${computerSelection} is the same as ${playerSelection }: Its a tie!`)
            console.log("tie")
            return "tie"
        } else if (computerSelection === 'paper' && playerSelection == 'scissors') {
            console.log(`${playerSelection} beats ${computerSelection}: Player wins!`)
            userScore += 1
            console.log("computerScore ", computerScore , "userScore ", userScore)
            return updateUserScore.innerHTML = userScore.toString()
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            console.log(`${playerSelection} beats ${computerSelection}: Player wins!`)
            userScore += 1
            console.log("computerScore ", computerScore , "userScore ", userScore)
            return updateUserScore.innerHTML  = userScore.toString()
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            console.log(`${computerSelection} beats ${playerSelection}: Computer wins!`)
            computerScore += 1
            console.log("computerScore ", computerScore , "userScore ", userScore)
            return updateCompScore.innerHTML  = computerScore.toString()
        } else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
            console.log(`${computerSelection} is the same as ${playerSelection }: Its a tie!`)
            console.log("tie")
            return "tie"
        } 

    } else {
        if (userScore > computerScore) {
            announceWin.innerHTML = " User wins"
        } else if (computerScore > userScore) {
            announceWin.innerHTML = "Computer wins"
        } else {
            announceWin.innerHTML = "Its a tie :)"
        }
        console.log("game over")
    }

} 










