import { createTile } from './tileFactory.js'; // Adjust function name for fossils
import { grassTexture, holeTexture, boneTexture } from './textures.js';

// 6x6 Grid layout
const gridSize = 6;

// Function to create an array of fossil squares
function createTilesArray() {
    const squares = []; // Array to hold square objects
    const fossilPositions = new Set();

    // Randomly place 5 fossil pieces
    while (fossilPositions.size < 5) {
        fossilPositions.add(Math.floor(Math.random() * gridSize * gridSize));
    }

    // Create squares and assign textures
    for (let i = 0; i < gridSize * gridSize; i++) {
        const isFossil = fossilPositions.has(i); // Check if this tile should have a fossil

        // Pass whether it's a fossil and the textures
        const square = createTile(isFossil, grassTexture, holeTexture, boneTexture);
        
        // If it has a fossil, set the userData to 1 (for bone), otherwise 0 (for hole)
        square.userData.hasFossil = isFossil ? 1 : 0;

        squares.push(square);
    }

    return squares;
}

let activeTiles = []; // Array to hold currently active tiles

// Function to create the 6x6 fossil field
function createExcavationSite(squares, scene) {
    const spacing = 0.63; // Space between squares

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const index = row * gridSize + col; // Calculate index
            const xPosition = col * spacing - (gridSize - 1) * spacing / 2; // Centered
            const yPosition = row * spacing - (gridSize - 1) * spacing / 2;

            squares[index].position.set(xPosition, yPosition, 0);
            scene.add(squares[index]);

            // Track the tiles in the activeTiles array
            activeTiles.push(squares[index]);
        }
    }
}

// Function to clear the excavation site (remove old tiles)
function clearExcavationSite(scene) {
    activeTiles.forEach(tile => {
        // Remove the tile from the scene
        scene.remove(tile);

        // Traverse through all children of the tile (or tile group) to dispose of them
        tile.traverse(child => {
            if (child.isMesh) {
                // Dispose of the geometry and materials
                child.geometry.dispose();  // Dispose geometry
            }
        });
    });

    // Clear the activeTiles array after removing all tiles
    activeTiles = [];
}


export { createExcavationSite, createTilesArray, clearExcavationSite };
