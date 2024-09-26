import { updateTextBox } from './textBox.js';
import { resetMouseClicks } from './squareAnimation.js';
import { isOverlayVisible,setIsOverlayVisible } from './marieCurie.js';

// Function to show the overlay with dynamic text
function showOverlay(text) {
    if (!isOverlayVisible) {
        setIsOverlayVisible(true);
    }
    const overlay = document.getElementById('overlay');
    const textBubble = document.getElementById('text-bubble');

    // Set the passed text in the bubble
    textBubble.innerHTML = text;

    // Adjust bubble size dynamically (optional)
    setTimeout(() => {
        // Reset width to auto to recalculate
        textBubble.style.width = 'auto'; 

        // Adjust bubble size after rendering content
        const textWidth = textBubble.offsetWidth;
        textBubble.style.width = `${textWidth}px`;
    }, 0);

    overlay.style.display = 'flex'; // Show the overlay
}

// Function to hide the overlay and reset the textBox
function hideOverlay(textBox) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide the overlay

    // Reset the textBox after the overlay is hidden
    if (textBox) {
        textBox.userData.combinationString = '';  // Clear the combination string
        updateTextBox(textBox, '');
    }

    resetMouseClicks();
}

// Function to update the content of the overlay without hiding it
function updateTextBubble(newText) {
    const textBubble = document.getElementById('text-bubble');
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

export { showOverlay, hideOverlay, updateTextBubble };
