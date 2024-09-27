import { isOverlayVisible, setIsOverlayVisible } from './maryAnning.js';
import { createNewGame } from './createNewGame.js';

// Function to show the overlay with dynamic text
function showOverlay(text) {
    if (!isOverlayVisible) {
        setIsOverlayVisible(true);
    }
    const overlay = document.getElementById('overlay-mary');

    showTextBubble(text);
    overlay.style.display = 'flex'; // Show the overlay
}

// Function to hide the overlay and reset the textBox
function hideOverlay() {
    const overlay = document.getElementById('overlay-mary');

    hideTextBubble();
    overlay.style.display = 'none'; // Hide the overlay

    createNewGame();
}

// Function to show the text bubble
function showTextBubble(text) {
    const textBubble = document.getElementById('text-bubble-mary');
    const wrapper = document.getElementById('wrapper-mary');

    updateTextBubble(text);
    wrapper.style.display = 'flex';
    textBubble.style.display = 'block'; // Show the text bubble
}

// Function to hide the text bubble
function hideTextBubble() {
    const textBubble = document.getElementById('text-bubble-mary');
    const wrapper = document.getElementById('wrapper-mary');

    wrapper.style.display = 'none';
    textBubble.style.display = 'none'; // Hide the text bubble
}

// Function to update the content of the overlay without hiding it
function updateTextBubble(newText) {
    const textBubble = document.getElementById('text-bubble-mary');
    textBubble.innerHTML = newText; // Update the overlay with new text (compound info)

    // Use setTimeout to allow the browser to render the content
    setTimeout(() => {
        // Reset width to auto to recalculate
        textBubble.style.width = 'auto'; 

        // Adjust bubble size after rendering content
        const textWidth = textBubble.offsetWidth;
        textBubble.style.width = `${textWidth}px`;
    }, 0);
}

export { showOverlay, hideOverlay, updateTextBubble, showTextBubble, hideTextBubble };
