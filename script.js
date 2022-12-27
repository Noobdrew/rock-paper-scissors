// set computer choise function by returning a 
//random number between 1-3 and convert to "rock" "paper" "scissors"

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}


function computerChoise() {
    let compChoise = getRandomInt(3);
    let choise = ""
    
    if (compChoise === 1){
        choise = "Rock";
    } else if (compChoise === 2){
        choise = "Paper"
    } else {
        choise = "Scissors"
    }

    console.log(choise)
}

computerChoise()
//let player choose  "rock" "paper" "scissors" by typing the name of their choise


// check if player choise beats computer choise

// display a you win or you lost massage
