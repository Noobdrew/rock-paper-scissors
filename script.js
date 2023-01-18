//set variables to DOM elements
let buttonRock = document.querySelector('.rock')
let buttonPaper = document.querySelector('.paper')
let buttonScis = document.querySelector('.scisors')
let scoreP = document.querySelector('.playerScore')
let scoreC = document.querySelector('.compScore')
let compRock = document.querySelector('.rockComp')
let compPaper = document.querySelector('.paperComp')
let compScis = document.querySelector('.scissorsComp')
let text = document.querySelector('.text')
let popupText = document.querySelector('.popup h4')
let container = document.querySelector('.container')
let popupButton = document.querySelector('.popButton')
let popup = document.querySelector('.popup')
//all event listeners 
buttonRock.addEventListener('click', rockClick)
buttonPaper.addEventListener('click', paperClick)
buttonScis.addEventListener('click', scisClick)
popupButton.addEventListener('click', reloadGame)

function reloadGame() {
    location.reload()
}

//a function that plays a single round of rock paper scissors
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

//generate random number 1-3 and assign rock paper scissors 

function getComputerChoise() {
    let compChoise = getRandomInt(3);
    let choise = ""

    if (compChoise === 1) {
        choise = "r";
        compRock.classList.add('selected')

        return choise
    } else if (compChoise === 2) {
        choise = "p"
        compPaper.classList.add('selected')
        return choise
    } else {
        choise = "s"
        compScis.classList.add('selected')
        return choise
    }


}

let compScore = 0
let playerScore = 0

let compWord = ""
let playerWord = ""
function convertToWord(letter) {
    if (letter === "p") {
        return "Paper"
    } else if (letter === "r") {
        return "Rock"
    } else {
        return "Scissors"
    }
}

function playRound(playerInput, compSelect) {
    playerWord = convertToWord(playerInput)
    compWord = convertToWord(compSelect)
    // draw cases
    if (compSelect === "s" && playerInput === "s"
        || compSelect === "p" && playerInput === "p"
        || compSelect === "r" && playerInput === "r") {
        playerWord = convertToWord(playerInput)
        compWord = convertToWord(compSelect)
        text.textContent = `Its a draw! Player chose: ${playerWord} Computer chose: ${compWord}`
        return console.warn("Its a draw!")
        // comp win cases 
    } else if (compSelect === "s" && playerInput === "p"
        || compSelect === "p" && playerInput === "r"
        || compSelect === "r" && playerInput === "s") {
        console.warn("The computer wins the round!")
        text.textContent = `The computer wins the round! Player chose: ${playerWord} Computer chose: ${compWord}`
        return compScore += 1
        // player wins cases
    } else {
        console.warn("You win the round!")
        text.textContent = `You win the round! Player chose: ${playerWord} Computer chose: ${compWord}`
        return playerScore += 1
    }
}

//remove previous selection 
function removeRed() {
    compRock.classList.remove('selected')
    compPaper.classList.remove('selected')
    compScis.classList.remove('selected')
    buttonRock.classList.remove('selected')
    buttonPaper.classList.remove('selected')
    buttonScis.classList.remove('selected')
}
//stop buttons after 5 games
function stopGame() {
    buttonRock.removeEventListener('click', rockClick)
    buttonPaper.removeEventListener('click', paperClick)
    buttonScis.removeEventListener('click', scisClick)
}
function game() {
    console.log(playerScore)
    scoreP.textContent = `Score: ${playerScore}`
    console.log(compScore)
    scoreC.textContent = `Score: ${compScore}`
    if (playerScore >= 5) {
        console.log('You win the game')
        stopGame()
        popupText.textContent = `You win with a score of ${playerScore} to ${compScore}`
        container.style.webkitFilter = "blur(5px)"
        popup.style.scale = '120'
        popup.style.visibility = 'visible'
    } else if (compScore >= 5) {
        console.log('Computer wins')
        stopGame()
        popupText.textContent = `You lose with a score of ${playerScore} to ${compScore} `
        container.style.webkitFilter = "blur(5px)"
        popup.style.scale = '120'
        popup.style.visibility = 'visible'
    }
}
//function for rock button
function rockClick(e) {
    removeRed()
    buttonRock.classList.add('selected')
    let playerInput = 'r'
    const compSelect = getComputerChoise();
    console.log('rock')
    playRound(playerInput, compSelect)
    game()
}
//function for paper button
function paperClick(e) {
    removeRed()
    buttonPaper.classList.add('selected')
    let playerInput = 'p'
    const compSelect = getComputerChoise();
    console.log('paper')
    playRound(playerInput, compSelect)
    game()
}
//function for scissors button
function scisClick(e) {
    removeRed()
    buttonScis.classList.add('selected')
    let playerInput = 's'
    const compSelect = getComputerChoise();
    console.log('scisors')
    playRound(playerInput, compSelect)
    game()
}