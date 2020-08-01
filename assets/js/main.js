// array of possible letters:
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// secret letter var, to be assigned by function for each round:
let secretLetter = '';
let userGuess = '';

//game initializing function:
const newRound = () => {
    letterSetter();

    document.onkeyup = function(event) {
        userGuess = event.key;
    

        if (userGuess === secretLetter) {
            console.log('You win!');
        } else {
            console.log('You lose!');
        };

    }

};

// computer picks a letter at beginning of round:
const letterSetter = () => {
    let letterIndex = Math.floor(Math.random() * 26);
    console.log(letterIndex);

    secretLetter = alphabet[letterIndex];

    return secretLetter;
}

//start new round on page load
newRound();

