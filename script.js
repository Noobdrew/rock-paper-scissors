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
console.log(compChoise)

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
console.log(input)

function checkValidInput(){
if (input === null) {
    console.log("Game cancelled, refresh page to play game!")
}
else if (input !== "r" && input !== "s" && input !== "p") {

    console.log("Please enter a vilid value: R for rock, P for paper and S for Scissors")
    input = playerInput();
    if (input !== "r" && input !== "s" && input !== "p") {
       
        console.log("Game cancelled, refresh page to play game!")
    } else {
        console.log("The game is on!")
    }

}
else {
    console.log("The game is on!")
}
}

checkValidInput();
console.log(input)

// check if player choise beats computer choises

function checkWinner() {


}

// display a you win or you lost massage
