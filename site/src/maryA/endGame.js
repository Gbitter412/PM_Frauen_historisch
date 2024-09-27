import { showOverlay, showTextBubble } from './overlayControl.js';
import { successMessage1, successMessage2, dinosaurInfo } from '../../assets/data/maryAnningInfoText.js';

// Initialize the ring buffer for seen dinosaurs with a size of 18
const ringBuffer = new Array(18).fill(null);
let bufferIndex = 0;
let isClickEnabled = true; // Track if clicks are allowed

// Function to add a dinosaur to the ring buffer
function addToRingBuffer(dinoID) {
    ringBuffer[bufferIndex] = dinoID;
    bufferIndex = (bufferIndex + 1) % ringBuffer.length; // Circular index
}

// Function to check if the dinosaur is already in the buffer
function isInRingBuffer(dinoID) {
    return ringBuffer.includes(dinoID);
}

// Function to get a random dinosaur that hasn't been shown recently
function getRandomDinosaur() {
    const dinoIDs = Array.from(dinosaurInfo.keys()); // Array of all dinosaur IDs
    let selectedDinoID;
    
    // Continue selecting random dinosaurs until one is not in the ring buffer
    do {
        const randomIndex = Math.floor(Math.random() * dinoIDs.length);
        selectedDinoID = dinoIDs[randomIndex];
    } while (isInRingBuffer(selectedDinoID));
    
    // Add this dinosaur to the ring buffer
    addToRingBuffer(selectedDinoID);
    
    // Return the dinosaur's info from the Map
    return { id: selectedDinoID, data: dinosaurInfo.get(selectedDinoID) };
}

// Function to handle end game logic when all bones are found
function handleEndGame() {
    if (!isClickEnabled) return; // Prevent triggering if click isn't enabled

    // Get a random dinosaur that hasn't been seen recently
    const { id, data } = getRandomDinosaur();

    // Show the success message depending on the dinosaur's ID
    const successMessage = id > 5 ? successMessage1 : successMessage2;
    showTextBubble(successMessage);

    // Disable clicks for 5 seconds
    isClickEnabled = false;

    // After 2 seconds, update the bubble text with the dinosaur info
    setTimeout(() => {
        const dinosaurHTML = `
            <img src="${data.image}" alt="${data.name}" style="width: 70%; height: auto;">
            <p><strong>${data.name}</strong></p>
            <p>Region: ${data.region}</p>
            <p>Time: ${data.time}</p>
            <p>Description: ${data.description}</p>
        `;
        showOverlay(dinosaurHTML);
    }, 2000);

    // Re-enable clicks and the overlay event listener after 3 seconds
    setTimeout(() => {
        isClickEnabled = true;
    }, 3000);
}

export { handleEndGame, isClickEnabled };
