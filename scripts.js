const welcomeMsg = document.getElementById("welcome");
const game = document.getElementById("game");
const startGameBtn = document.getElementById("start-game-btn");
const playAgain = document.getElementById("play-again");
const playAgainBtn = document.getElementById("play-again-btn");
const winWin = document.getElementById("win-win")

startGameBtn.addEventListener("click", () => {
    game.style.display = "block"
    welcomeMsg.style.display = "none"
})

playAgainBtn.addEventListener("click", () => {
    location.reload()
})

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
    console.log(rounds)
    if (rounds > 0) {
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
        game.style.display = "none"
        if (userScore > computerScore) {
            winWin.innerHTML = "User wins with a score of: " + userScore
            announceWin.innerHTML = "User wins with a score of: " + userScore
            playAgain.style.display = "block"
        } else if (computerScore > userScore) {
            announceWin.innerHTML = "Computer wins with a score of: " + computerScore
            winWin.innerHTML = "Computer wins with a score of: " + computerScore
            playAgain.style.display = "block"
        } else {
            announceWin.innerHTML = "Its a tie!"
            winWin.innerHTML = "Its a tie!" 
            playAgain.style.display = "block"
        }
        console.log("game over")
    }

} 

playRound(playerSelection)










