import { updateTextBox } from './textBox.js'; // New import for text box

// Variables to control the animation state
let isAnimating = false;
let animationStartTime = 0;
let currentAnimatingSquare = null; // Track the currently animating square
const animationDuration = 200; // Animation duration in milliseconds

// Counter for clicks
let clickCount = 0; // Initialize click counter
const maxClicks = 6; // Maximum number of allowed clicks

// Function to handle the mouse click event
function handleMouseClick(event, squareGroups, camera, textBox) {
    // Check if the maximum number of clicks has been reached
    if (clickCount >= maxClicks) {
        return; // Exit the function if max clicks reached
    }

    // Create a raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check if any square in squareGroups is clicked
    for (const squareGroup of squareGroups) {
        const intersects = raycaster.intersectObject(squareGroup, true); // 'true' checks all child meshes
        if (intersects.length > 0 && !isAnimating) {
            // Start the animation
            isAnimating = true;
            animationStartTime = performance.now();
            currentAnimatingSquare = squareGroup; // Set the currently animating square

            // Get the center text of the clicked square
            const centerText = squareGroup.userData.centerText;
            updateTextBox(textBox, centerText); // Update the text box with the center text

            clickCount++; // Increment the click counter
            break; // Exit the loop once a square is clicked
        }
    }
}

// Function to animate the square like a button press
function animateSquarePress(time) {
    if (isAnimating && currentAnimatingSquare) {
        // Calculate elapsed time since animation started
        const elapsedTime = time - animationStartTime;

        // Calculate the scale factor based on a sine wave for smooth scaling effect
        const scaleFactor = 1 - 0.2 * Math.sin((elapsedTime / animationDuration) * Math.PI);

        // Apply the scale to the currently animating square
        currentAnimatingSquare.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Check if the animation duration has been reached
        if (elapsedTime >= animationDuration) {
            // Reset the scale back to normal
            currentAnimatingSquare.scale.set(1, 1, 1);
            isAnimating = false; // Reset animation state
            currentAnimatingSquare = null; // Reset the current animating square
        }
    }
}

// Export the functions to be used in other scripts
export { animateSquarePress, handleMouseClick };
