import { onBoneFound } from './gauge.js';
import { holeTexture, boneTexture } from './textures.js';

let isAnimating = false;
let currentAnimatingSquare = null;
let animationStartTime = 0;
const animationDuration = 300; // Duration in milliseconds

// Height of the navbar (56px)
const navbarHeight = 56;

// Handle tile click
function handleTileClick(event, squareGroups, camera) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((event.clientY - navbarHeight) / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    for (const squareGroup of squareGroups) {
        const intersects = raycaster.intersectObject(squareGroup, true);
        // Check if the tile has already been clicked
        if (intersects.length > 0 && !isAnimating && !squareGroup.userData.clicked) {
            isAnimating = true;
            currentAnimatingSquare = squareGroup;
            animationStartTime = performance.now(); // Set the animation start time

            // Mark the tile as clicked
            squareGroup.userData.clicked = true;

            // Determine action based on whether it has a fossil
            if (squareGroup.userData.hasFossil) {
                squareGroup.children[0].material.map = boneTexture; // Update texture
                onBoneFound(); // Update the gauge when a bone is found
            } else {
                squareGroup.children[0].material.map = holeTexture; // Update texture
            }
            
            // Trigger the rotation animation in the render loop (animateTilePress will handle it)
            break;
        }
    }
}

// Handle the tile press animation (called in the render loop)
function animateTilePress(time) {
    if (currentAnimatingSquare && isAnimating) {
        const elapsedTime = time - animationStartTime; // Calculate the time since the animation started

        if (elapsedTime < animationDuration) {
            // Calculate how much to rotate the tile in this frame
            const rotationProgress = (elapsedTime / animationDuration) * Math.PI; // Full 180 degrees over duration
            currentAnimatingSquare.rotation.y = rotationProgress; // Apply the rotation
        } else {
            // Ensure it completes the rotation
            currentAnimatingSquare.rotation.y = Math.PI;
            isAnimating = false; // End the animation
            currentAnimatingSquare = null; // Reset the current square
        }
    }
}

export { handleTileClick, animateTilePress };
