var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var secretLetter = '';

// computer picks a letter at beginning of round:
function letterSetter() {
    var letterIndex = Math.floor(Math.random() * 26);
    console.log(letterIndex);

    secretLetter = alphabet[letterIndex];

    return secretLetter;
}

console.log(letterSetter());