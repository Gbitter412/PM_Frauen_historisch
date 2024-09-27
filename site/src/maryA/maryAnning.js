// Import necessary functions
import { animateTilePress, handleTileClick } from './tileAnimation.js';
import { showOverlay, hideOverlay } from './overlayControl.js';
import { introText } from '../../assets/data/maryAnningInfoText.js';
import { isClickEnabled } from './endGame.js';
import { setSceneForNewGame, excavationTiles } from './createNewGame.js';

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

// Show the overlay when the page loads
showOverlay(introText);

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.background = new THREE.Color(0xeeeeee);

setSceneForNewGame(scene);

// Set camera position
camera.position.z = 5;

// Add an event listener to hide the overlay on click
document.getElementById('overlay-mary').addEventListener('click', () => {
    if (!isClickEnabled) return; // If clicks are disabled, prevent hiding the overlay
    
    hideOverlay(); // Hide the overlay
    const overlay = document.getElementById('overlay-mary');
    overlay.classList.remove('active'); // Remove active class when overlay is hidden

    // Set a delay before allowing interactions with the elements
    setTimeout(() => {
        isOverlayVisible = false; // Enable interaction after the delay
    }, 500); // Delay in milliseconds (500ms = 0.5 seconds)
});

// Modified event listener for mouse click
window.addEventListener('click', (event) => {
    if (!isClickEnabled) return; // If clicks are disabled, prevent hiding the overlay

    // Check if the overlay is visible; if true, prevent the event from proceeding
    if (isOverlayVisible) {
        event.stopPropagation(); // Stop event propagation
        event.preventDefault();  // Prevent default behavior
        return; // Exit the function, so no element clicks are registered
    }
    
    // If overlay is hidden, handle mouse click normally
    handleTileClick(event, excavationTiles, camera);
});

// Animation loop
function animate(time) {
    requestAnimationFrame(animate);
    animateTilePress(time);
    renderer.render(scene, camera);
}

animate();
