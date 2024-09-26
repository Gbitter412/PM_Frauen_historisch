// Import the necessary functions
import { createPeriodicTable, createPeriodicElementArray } from './periodicTableFactory.js';
import { animateSquarePress, handleMouseClick } from './squareAnimation.js';
import { createTextBox } from './textBox.js';
import { showOverlay, hideOverlay } from './overlayControl.js';
import { processCombination } from './combineElements.js';
import { introText } from '../../assets/data/marieCurieInfoText.js';

// Create a flag to track the overlay state
export let isOverlayVisible = true;

export function setIsOverlayVisible(value) {
    isOverlayVisible = value;
}

const canvas = document.getElementById('gameCanvas'); // Get the canvas element
const navbarHeight = 56; // Height of the navbar

function resizeCanvas() {
    canvas.width = window.innerWidth; // Full width of the window
    canvas.height = window.innerHeight - navbarHeight; // Height minus the navbar height
}

resizeCanvas(); // Initial sizing
window.addEventListener('resize', resizeCanvas); // Adjust on window resize

// Set up the scene
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(canvas.width, canvas.height);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Set the size of the renderer and add it to the document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set background color
scene.background = new THREE.Color(0xeeeeee);

// Create the periodics elements
const periodicElements = createPeriodicElementArray();

// Show the overlay when the page loads
showOverlay(introText);

// Create the periodic table
createPeriodicTable(periodicElements, scene);

// Create the text box at the top center
const textBox = createTextBox();
scene.add(textBox);

// Set camera position
camera.position.z = 5;

// Add an event listener to hide the overlay on click
document.getElementById('overlay').addEventListener('click', () => {
    hideOverlay(textBox);
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active'); // Remove active class when overlay is hidden
    
    // Set a delay before allowing interactions with the elements
    setTimeout(() => {
        isOverlayVisible = false; // Enable interaction after the delay
    }, 500); // Delay in milliseconds (500ms = 0.5 seconds)
});

// Modified event listener for mouse click
window.addEventListener('click', (event) => {
    // Check if the overlay is visible; if true, prevent the event from proceeding
    if (isOverlayVisible) {
        event.stopPropagation(); // Stop event propagation
        event.preventDefault();  // Prevent default behavior
        return; // Exit the function, so no element clicks are registered
    }

    // Adjust the y-coordinate to account for the navbar height
    const adjustedY = event.clientY - navbarHeight;

    // Create a new event with the adjusted y-coordinate for handling clicks
    const adjustedEvent = {
        ...event,
        clientY: adjustedY // Override the y-coordinate with the adjusted value
    };
    
    // If overlay is hidden, handle mouse click normally
    handleMouseClick(event, periodicElements, camera, textBox);
});

// Add event listener for the "Combine Elements" button
document.getElementById('combine-button').addEventListener('click', () => {
    processCombination(textBox); // Pass the textBox to the processing function
});

// Animation loop
function animate(time) {
    requestAnimationFrame(animate);

    // Update the animation for square button press effect
    animateSquarePress(time);

    // Render the scene
    renderer.render(scene, camera);
}

animate();
