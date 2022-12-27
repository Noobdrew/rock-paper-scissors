// set computer choise function by returning a 
//random number between 1-3 and convert to "rock" "paper" "scissors"

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}


function computerChoise() {
    let compChoise = getRandomInt(3);
    let choise = ""

    if (compChoise === 1) {
        choise = "r";
    } else if (compChoise === 2) {
        choise = "p"
    } else {
        choise = "s"
    }


    return choise
}

const compChoise = computerChoise()
// uncomment to debug compChoise
// console.log(compChoise)

//let player choose  "rock" "paper" "scissors" by typing the name of their choise

function playerInput() {
    const input = prompt("Sellect R for rock, P for paper and S for Scissors")
    if (input === null || input === "") {

        return null;
    }
    const lowerInput = input.toLowerCase()

    return lowerInput;
}
let input = playerInput();
//uncomment to debug playerInput
// console.log(input)

// check if player input is valid

function checkValidInput() {
    if (input === null) {
        console.log("Game cancelled, refresh page to play game!")
        return 0
    }
    else if (input !== "r" && input !== "s" && input !== "p") {

        console.log("Please enter a vilid value: R for rock, P for paper and S for Scissors")
        input = playerInput();
        if (input !== "r" && input !== "s" && input !== "p") {

            console.log("Game cancelled, refresh page to play game!")
            return 0
        } else {
           
            return 1
        }

    }
    else {
       
        return 1
    }
}

const validInput = (checkValidInput());
// uncomment to debug playerInputs
// console.log(validInput)
// console.log(input)
checkWinner();


// check if player choise beats computer choises


function checkWinner() {
    if (validInput === 1) {
        console.log("The game is on!")
        // draw cases
        if (compChoise === "s" && input === "s"
            || compChoise === "p" && input === "p"
            || compChoise === "r" && input === "r") {
            return console.log("Its a draw!")
            // comp win cases 
        } else if (compChoise === "s" && input === "p"
            || compChoise=== "p" && input === "r"
            || compChoise === "r" && input === "s") {
                return console.log("The computer wins!")
            // player wins case
        } else {
            return console.log("You win!")
        }

    } else {
        return console.log("No winner game cancelled")
    }
}

