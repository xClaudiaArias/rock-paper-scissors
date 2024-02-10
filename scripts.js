const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    let comp_choice = choices[Math.floor(Math.random() * choices.length)]
    // console.log(comp_choice)
    return comp_choice
}

const playGame = () => {
    let userScore = 0;
    let computerScore = 0;

    let i = 0;

    while ( i < 5) {
        var playerSelection= prompt("Choose: Rock, Paper or Scissors","");
        var computerSelection = getComputerChoice()

        const playRound = (playerSelection, computerSelection) => {


            console.log("computerSelection: ", computerSelection)
            console.log("playerSelection: ", playerSelection)
        
            // ROCK 
            if (computerSelection === 'rock' && playerSelection === 'rock') {
                console.log(`${computerSelection} is the same as ${playerSelection }: Its a tie!`)
                console.log("tie")
            } else if (computerSelection === 'rock' && playerSelection === 'paper') {
                console.log(`${playerSelection} beats ${computerSelection}: Player wins!`)
                userScore += 1
            } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
                console.log(`${computerSelection} beats ${playerSelection}: Computer wins!`)
                computerScore += 1
            } else if (computerSelection === 'paper' && playerSelection === 'rock') {
                console.log(`${computerSelection} beats ${playerSelection}: Computer wins!`)
                computerScore += 1
            } else if (computerSelection === 'paper' && playerSelection === 'paper') {
                console.log(`${computerSelection} is the same as ${playerSelection }: Its a tie!`)
                console.log("tie")
            } else if (computerSelection === 'paper' && playerSelection == 'scissors') {
                console.log(`${playerSelection} beats ${computerSelection}: Player wins!`)
                userScore += 1
            } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
                console.log(`${playerSelection} beats ${computerSelection}: Player wins!`)
                userScore += 1
            } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
                console.log(`${computerSelection} beats ${playerSelection}: Computer wins!`)
                computerScore += 1
            } else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
                console.log(`${computerSelection} is the same as ${playerSelection }: Its a tie!`)
                console.log("tie")
            }
        }   

        playRound(playerSelection, computerSelection)
        
        i++
    }

    console.log(userScore, computerScore, " --> scores")

    if (userScore > computerScore) {
        console.log(`User: ${userScore} Computer: ${computerScore} --- User Wins`)
    } else if (computerScore > userScore) {
        console.log(`User: ${userScore} Computer: ${computerScore} --- Computer Wins`)
    } else {
        console.log(`User: ${userScore} Computer: ${computerScore} --- It's a tie`)
    }

}

playGame()