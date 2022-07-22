

function toggleMotion() {
    let el = document.getElementById('me-still')
    
    if (el == null) {
        el = document.getElementById('me-in-motion')
    }
    
    el.id = (el.id === 'me-in-motion' ? 'me-still' : 'me-in-motion')
}

// Lingering question: Is modifying element IDs advisable, or should I toggle my headshot's motion a different way?