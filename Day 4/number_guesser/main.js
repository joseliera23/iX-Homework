// Generates a random number between min (inclusive) and max (exclusive)
function generateRandomInt(min, max) {
    let rand = (Math.random()) * (max-min) + min;
    rand = Math.floor(rand);
    return rand;
}



const guessInput = document.getElementById('guess-input');
const buttonInput = document.getElementById('button');
const cardBody = document.getElementById('card-body');



buttonInput.addEventListener('click', (event) => {
    const num = generateRandomInt(0, 11);
    const guess = guessInput.value;

    const correctText = "Correct! The number was " + num + ".";
    const incorrectText = "Incorrect... you guessed " + guess + ", but the number was " + num + ".";
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = (num == guess ? correctText : incorrectText);
    
    cardBody.append(resultDiv);
});
