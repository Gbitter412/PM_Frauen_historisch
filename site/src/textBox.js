// Function to create a text box at the top center of the canvas
function createTextBox() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 700; // Width of the text box
    canvas.height = 100; // Height of the text box

    // Set the background color to match the canvas color (light gray)
    context.fillStyle = '#eeeeee'; // Background color same as canvas
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black'; // Text color
    context.font = 'bold 50px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('', canvas.width / 2, canvas.height / 2); // Placeholder for text

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const geometry = new THREE.PlaneGeometry(7, 1); // Adjust the size as needed
    const textBoxMesh = new THREE.Mesh(geometry, material);
    
    textBoxMesh.position.set(0, 3, 0); // Position it at the top center
    return textBoxMesh;
}

// Function to update the text box with new text
let currentText = '';
function updateTextBox(textBox, newText) {
    if (currentText === '') {
        currentText = newText; // First click
    } else if (newText === '') {
        currentText = '';
    }
    else {
        currentText += ' + ' + newText; // Subsequent clicks
    }

    // Update the canvas with the new text
    const canvas = textBox.material.map.image;
    const context = canvas.getContext('2d');

    // Clear the previous content
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set the background color to match the canvas color
    context.fillStyle = '#eeeeee'; // Background color same as canvas
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text
    context.fillStyle = 'black'; // Text color
    context.font = '40px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(currentText, canvas.width / 2, canvas.height / 2); // Draw the updated text

    // Update the texture
    textBox.material.map.needsUpdate = true;

    // Add the new string as userData for manipulation
    textBox.userData.combinationString = currentText;
}

// Export the functions to be used in other scripts
export { createTextBox, updateTextBox };
