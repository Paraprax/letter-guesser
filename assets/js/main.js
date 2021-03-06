// array of possible letters:
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// secret letter var, to be assigned by function for each round:
let secretLetter = '';
let userGuess = '';
let guessedLetters = [];
let guessesLeft = 0;
let winCount = 0;
let lossCount = 0;
let roundCount = 0;

//game initializing function:
const newRound = () => {
    //~ ~ ~ ~ ~ ~ ~ at the beginning of each round:
    //available guesses are reset to full:
    guessesLeft = 8;

    //guessed letters array is cleared:
    guessedLetters = [];

    //number of rounds is incremented:
    roundCount++;

    //a new secret letter is chosen by the program:
    letterSetter();

    //the on-screen stats are all set to their stored values:
    statUpdates();
    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ~ ~ ~ ~  ~ ~ ~ ~ 

    //whenever the user hits a key:
    document.onkeyup = function(event) {

        //if the key is an actual letter(to prevent playing cmd, refresh, etc keys):
        if (alphabet.indexOf(event.key) != -1) {

            //only let the game be played if the user has guesses left, else start a new round:
            if (guessesLeft > 0) {
                //save the key value as the user's guess:
                userGuess = event.key;

                //evaluate the user's guess && update var values:
                if (userGuess === secretLetter) {
                    //if the user guesses right, update the score and start a new round:
                    console.log('You win!');
                    winCount++;
                    newRound();
                } else {
                    //if the user guesses wrong, add their guess to the guessed-letters array and reduce the number of guesses left by 1:
                    guessedLetters.push(userGuess);
                    guessesLeft--;
                };

                // update all the on-screen stats after each guess:
                statUpdates();
            }  else {
                alert('You lose!');
                lossCount++;
                newRound();
            }       
        }
    }
};

// computer picks a letter at beginning of round:
const letterSetter = () => {
    let letterIndex = Math.floor(Math.random() * 26);
    console.log(letterIndex);

    secretLetter = alphabet[letterIndex];

    return secretLetter;
}

// set/update html elements to reflect stat values:
const statUpdates = () => {
    document.getElementById("guess-array").innerHTML = guessedLetters;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("round-number").innerHTML = roundCount;
    document.getElementById("win-number").innerHTML = winCount;
    document.getElementById("loss-number").innerHTML = lossCount;
}

//start new round on page load:
newRound();

