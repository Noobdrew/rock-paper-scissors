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
        return choise
    } else if (compChoise === 2) {
        choise = "p"
        return choise
    } else {
        choise = "s"
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

function playRound(playerInput, compSelect) {
    // draw cases
    if (compSelect === "s" && playerInput === "s"
        || compSelect === "p" && playerInput === "p"
        || compSelect === "r" && playerInput === "r") {
        return console.warn("Its a draw!")
        // comp win cases 
    } else if (compSelect === "s" && playerInput === "p"
        || compSelect === "p" && playerInput === "r"
        || compSelect === "r" && playerInput === "s") {
        console.warn("The computer wins the round!")
        return compScore += 1
        // player wins caser
    } else {
        console.warn("You win the round!")
        return playerScore += 1
    }


}
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

function game() {
    console.log("First to 5 wins!")
    for (let i = 1; i < 50; i++) {
        
        if (compScore >= 5) {
            console.log(`Computer wins at round ${i} with a score of ${compScore} to ${playerScore}!`)
            return
        } else if (playerScore >= 5) {
            console.log(`Player wrins at round ${i} with a score of ${playerScore} to ${compScore}!`)
            return
        }

        console.log(`This is round ${i}!`)

        const compSelect = getComputerChoise();
        //console.log(`computer selection is ${compSelect}`);

        const playerInput = getPlayerInput()
        console.clear();
        //console.log(`player selection is ${playerInput}`);

        //end loop if player enters null or empty srtring
        if (playerInput === null || playerInput === "") {
            console.log(`Player gave up at round ${i} with a score of ${playerScore} to ${compScore}!`)
            return
        }

        playRound(playerInput, compSelect);
       
        //convert letters to words
        playerWord = convertToWord(playerInput)
        compWord=convertToWord(compSelect)
        console.log(`Player chose ${playerWord}`)
        console.log(`Computer chose ${compWord}`)

        console.log(`The current score is ${compScore} for the computer, and ${playerScore} for the player!`)
        
        
    }
}

game();