// array of possible letters:
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// secret letter var, to be assigned by function for each round:
let secretLetter = '';
let userGuess = '';
let guessedLetters = [];
let guessesLeft = 8;
let winCount = 0;
let lossCount = 0;
let roundCount = 0;

//game initializing function:
const newRound = () => {
    letterSetter();

    //whenever the user hits a key:
    document.onkeyup = function(event) {

        //if the key is an actual letter(to prevent playing cmd, refresh, etc keys):
        if (alphabet.indexOf(event.key) != -1) {

            //save the key value as the user's guess:
            userGuess = event.key;
            
            //evaluate the user's guess && update var values:
            if (userGuess === secretLetter) {
                console.log('You win!');
                winCount++;
            } else {
                guessedLetters.push(userGuess);
                guessesLeft--;
            };

            statUpdates();
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

//start new round && update html stat elements on page load:
newRound();
statUpdates();

