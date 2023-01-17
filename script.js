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

let container = document.querySelector('.container')


buttonRock.addEventListener('click', rockClick)
buttonPaper.addEventListener('click', paperClick)
buttonScis.addEventListener('click', scisClick)


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

function getPlayerInput() {
    let input = prompt("select r=rock p=paper s=scissors")
    if (input === null || input === "") {
        return input = null
    } else {

        return input.toLocaleLowerCase();
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

//take player input from buttons

function removeRed() {
    compRock.classList.remove('selected')
    compPaper.classList.remove('selected')
    compScis.classList.remove('selected')
    buttonRock.classList.remove('selected')
    buttonPaper.classList.remove('selected')
    buttonScis.classList.remove('selected')
}




function rockClick(e) {
    removeRed()
    buttonRock.classList.add('selected')
    let playerInput = 'r'
    const compSelect = getComputerChoise();
    console.log('rock')
    playRound(playerInput, compSelect)
    //set player score
    console.log(playerScore)
    scoreP.textContent = `Score: ${playerScore}`
    //set comp score
    console.log(compScore)
    scoreC.textContent = `Score: ${compScore}`
    if (playerScore >= 5) {
        console.log('You win the game')
        

    } else if (compScore >= 5) {
        console.log('Computer wins')
      
    }
}


function paperClick(e) {
    removeRed()
    buttonPaper.classList.add('selected')
    let playerInput = 'p'
    const compSelect = getComputerChoise();
    console.log('paper')
    playRound(playerInput, compSelect)
    console.log(playerScore)
    scoreP.textContent = `Score: ${playerScore}`
    console.log(compScore)
    scoreC.textContent = `Score: ${compScore}`
    if (playerScore >= 5) {
        console.log('You win the game')
    } else if (compScore >= 5) {
        console.log('Computer wins')
    }
}

function scisClick(e) {
    removeRed()
    buttonScis.classList.add('selected')
    let playerInput = 's'
    const compSelect = getComputerChoise();
    console.log('scisors')
    playRound(playerInput, compSelect)
    console.log(playerScore)
    scoreP.textContent = `Score: ${playerScore}`
    console.log(compScore)
    scoreC.textContent = `Score: ${compScore}`
    if (playerScore >= 5) {
        console.log('You win the game')

    } else if (compScore >= 5) {
        console.log('Computer wins')
    }
}



// function game() {
//     console.log("First to 5 wins!")
//     for (let i = 1; i < 50; i++) {

//         if (compScore >= 5) {
//             console.log(`Computer wins at round ${i} with a score of ${compScore} to ${playerScore}!`)
//             return
//         } else if (playerScore >= 5) {
//             console.log(`Player wrins at round ${i} with a score of ${playerScore} to ${compScore}!`)
//             return
//         }

//         console.log(`This is round ${i}!`)

//         const compSelect = getComputerChoise();
//         //console.log(`computer selection is ${compSelect}`);

//         const playerInput = getPlayerInput()
//         console.clear();
//         //console.log(`player selection is ${playerInput}`);

//         //end loop if player enters null or empty srtring
//         if (playerInput === null || playerInput === "") {
//             console.log(`Player gave up at round ${i} with a score of ${playerScore} to ${compScore}!`)
//             return
//         }

//         playRound(playerInput, compSelect);

//         //convert letters to words
//         playerWord = convertToWord(playerInput)
//         compWord = convertToWord(compSelect)
//         console.log(`Player chose ${playerWord}`)
//         console.log(`Computer chose ${compWord}`)

//         console.log(`The current score is ${compScore} for the computer, and ${playerScore} for the player!`)


//     }
// }





//game();