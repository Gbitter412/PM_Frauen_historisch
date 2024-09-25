import { createPeriodicElement } from './elementFactory.js';
import { color, name, symbol, atomicNumber, atomicMass, group } from '../assets/data/elements.js';

// Array representation of the periodic table layout
const periodicTableArray = [
    [1, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 2],
    [3, 4, "", "", "", "", "", "", "", "", "", "", 5, 6, 7, 8, 9, 10],
    [11, 12, "", "", "", "", "", "", "", "", "", "", 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, "57-71", 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, "89-103", 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    ["", "", 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, ""],
    ["", "", 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, ""]
];

// Function to create an array of square objects group
function createPeriodicElementArray() {
    const result = []; // Array to hold the square groups

    // Create each square element
    for (let index = 0; index < symbol.length; index++) {
        const squareGroup = createPeriodicElement(color[index], symbol[index], name[index], atomicNumber[index]);
        result.push(squareGroup);
    }

    return result; // Return the array of square groups
}

// Function to arrange squares in a column
function createPeriodicTable(periodicElements, scene) {
    const spacing = 0.63; // Space between squares

    // Loop through each row of the periodicTableArray
    for (let row = 0; row < periodicTableArray.length; row++) {
        // Loop through each column in the current row
        for (let col = 0; col < periodicTableArray[row].length; col++) {
            const elementNumber = periodicTableArray[row][col];

            // Skip if the element number is empty or a string (e.g., "57-71")
            if (elementNumber === "" || typeof elementNumber === 'string') {
                continue; // Skip this iteration if it's not a valid element
            }

            // Convert elementNumber to 0-based index for accessing element data
            const index = elementNumber - 1; // Convert to 0-based index

            // Set the position of each square based on its row and column
            const xPosition = col * spacing - 5.5; // Adjust X position to center
            const yPosition = (row - 4) * -spacing; // Adjust Y position to center

            periodicElements[index].position.set(xPosition, yPosition, 0); // Set each square's position
            scene.add(periodicElements[index]); // Add the square to the scene
        }
    }
}

export { createPeriodicTable, createPeriodicElementArray };
