
// Toggles the interests section of the website when the radiobox is pressed
function toggle() {
    
    // TODO: Look up radiobox documentation in the future to get the radiobox state, rather than depending on 'onclick' for toggling
    let el = document.getElementById('interests')
    const display = el.style.display;
    el.style.display = (display === 'none' ? 'block' : 'none');
}


// Inverts all colors when the checkbox is pressed
function invertAllColors() {
    
    // TODO: Figure out a way to get all elements more efficiently in the future rather than getting all elements by id
    let body = document.getElementById('body');
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let interests = document.getElementById('interests');
    let github = document.getElementById('github');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let label1 = document.getElementById('label1');
    let label2 = document.getElementById('label2');

    console.log(label2)



    let containers = [container1, container2, interests]
    let words = [p1, p2, p3, label1, label2, github]

    containers.forEach(e => {
        e.style.backgroundColor = (e.style.backgroundColor === 'grey' ? 'lightblue' : 'grey')
    });

    words.forEach(e => {
        e.style.color = (e.style.color === 'white' ? 'black' : 'white')
    });

    body.style.backgroundColor = (body.style.backgroundColor === 'black' ? 'white' : 'black')    
}