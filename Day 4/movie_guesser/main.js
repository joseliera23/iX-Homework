// Generates a random number between min (inclusive) and max (exclusive)
function generateRandomInt(min, max) {
    let rand = (Math.random()) * (max-min) + min;
    rand = Math.floor(rand);
    return rand;
}

// List of movies given in lecture
const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ];
   
// Chooses a movie from the list of movies
function chooseRandomMovie(movies) {
    const length = movies.length;
    const idx = generateRandomInt(0, length);
    return movies[idx];
}


const movie = chooseRandomMovie(movies);
const description = document.getElementById('movie-desc');
description.innerHTML = movie.explanation;

const guessInput = document.getElementById('guess-input');
const submitInput = document.getElementById('submit-button');
const hintInput = document.getElementById('hint-button');
const cardBody = document.getElementById('card-body');


// Displays hint
hintInput.addEventListener('click', (event) => {
    const hintDiv = document.createElement('div');
    hintDiv.innerHTML = movie.hint;
    cardBody.append(hintDiv);
});


// Submits user's guess and tells user whether they were right or wrong (case, space sensitive for now)
submitInput.addEventListener('click', (event) => {
    const title = movie.title;
    const guess = guessInput.value;

    const correctText = "Yes, the movie is " + title + "!";
    const incorrectText = "Incorrect... you guessed " + guess + ", but the movie was " + title + ".";
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = (title == guess ? correctText : incorrectText);
    cardBody.append(resultDiv);
});
