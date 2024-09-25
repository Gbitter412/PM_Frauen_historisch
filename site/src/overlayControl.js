// Function to show the overlay
function showOverlay() {
    const overlay = document.getElementById('overlay');
    const textBubble = document.getElementById('text-bubble');

    // Array of texts to show in the bubble
    const texts = [
        "Hi! My name is Marie Curie.<br><br>" + 
        "I was the first woman to be awarded the Nobel Prize for my work discovering radium and polonium.<br><br>" +
        "Let us combine some elements!",
        "Test."
    ];

    // Pick a random text from the array
    textBubble.innerHTML = texts[0]; // Set the text in the bubble

    // Adjust bubble size dynamically (optional)
    setTimeout(() => {
        // Adjust bubble size after rendering content
        const textWidth = textBubble.offsetWidth;
        textBubble.style.width = `${textWidth}px`;
    }, 0);

    overlay.style.display = 'flex'; // Show the overlay
}

// Function to hide the overlay
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide the overlay
}

export { showOverlay, hideOverlay };