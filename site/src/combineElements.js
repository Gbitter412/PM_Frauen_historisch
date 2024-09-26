import { showOverlay, updateTextBubble } from './overlayControl.js';
import { unknownCompoundText, knownCompoundText, successMessage, thankYouMessage, checkSurprise } from '../assets/data/marieCurieInfoText.js';

// Function to process the combination of elements from the textBox
function processCombination(textBox) {
    const canvas = textBox.material.map.image;
    const context = canvas.getContext('2d');

    // Get the current text from the canvas (the text currently displayed)
    const currentText = textBox.userData.combinationString;

    if (!currentText) {
        console.log("No elements selected to combine.");
        return;
    }

    // Split the text using the ' + ' separator to extract individual elements
    const elements = currentText.split(' + ').map(el => el.trim());

    // Sort the elements to ensure the key matches in knownCompoundText (as it's order-sensitive)
    const sortedElements = elements.sort();

    // Check if the combination exists in knownCompoundText
    let compoundInfo;
    for (let [compoundKey, compoundData] of knownCompoundText.entries()) {
        // Sort the compound key for comparison
        const sortedKey = compoundKey.slice().sort();

        if (JSON.stringify(sortedElements) === JSON.stringify(sortedKey)) {
            compoundInfo = compoundData.info;
            break;
        }
    }

    if (compoundInfo) {
        // Known compound, show the success message first
        if (checkSurprise(sortedElements)) {
            showOverlay(thankYouMessage);
        }
        else {
            showOverlay(successMessage);
        }

        // Set a timeout to wait for 1-2 seconds before showing the compound info
        setTimeout(() => {
            // Now update the overlay with the compound information
            updateTextBubble(compoundInfo);
        }, 2000); // delay
    } else {
        // Unknown compound, show the unknownCompoundText
        showOverlay(unknownCompoundText);
    }
}

export { processCombination };
