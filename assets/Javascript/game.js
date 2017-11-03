// Computer's choice array
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Score Variables
var wins = 0;
var losses = 0;

// This gets set to whatever key the user presses below
var userGuess;

// These variables get set inside reset
var guesses_Left;
var keysPressed;
var computerGuess;

// Function to reset guesses left and user guess.
function reset() {
    guesses_Left = 10;
    keysPressed = [];
    computerGuess = computerChoice[Math.floor(Math.random() * 25)];
    console.log(computerGuess);
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

// Setup the variables for the first game
reset();

//After key is pressed function
document.onkeyup = function(event) {

    //Key pressed
    var userGuess = event.key.toLocaleLowerCase();
    if (!isLetter(userGuess)) {
        alert("Please pick a letter!");
        return;
    }


    //save keyPressed information
    keysPressed.push(userGuess);

    if (userGuess === computerGuess) {
        alert("It's the same!!");
        (wins++);
        reset();
    }

    else if (guesses_Left === 0) {
        (losses++);
        reset();
    }

    else {
        (guesses_Left--);
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user guess, and wins/losses/ and guesses left
    var html =
        "<p>You guessed: " + keysPressed + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guesses_Left + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}
