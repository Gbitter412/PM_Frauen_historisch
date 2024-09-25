// Function to create a square group with text
function createPeriodicElement(squareColor, centerText, bottomText, topNumber) {
    // Create a group to hold the square and the text
    const elementGroup = new THREE.Group();

    // Store the centerText in the group for later retrieval
    elementGroup.userData.centerText = centerText;

    // Create the border square (2D)
    const borderGeometry = new THREE.PlaneGeometry(0.62, 0.62); // Slightly larger square for the border
    const borderMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color for the border
    const borderSquare = new THREE.Mesh(borderGeometry, borderMaterial);
    borderSquare.position.set(0, 0, -0.01); // Slightly behind the colored square
    elementGroup.add(borderSquare); // Add the border to the group

    // Create a square (2D)
    const geometry = new THREE.PlaneGeometry(0.6, 0.6); // A square of 0.6x0.6 units
    const material = new THREE.MeshBasicMaterial({ color: squareColor });
    const square = new THREE.Mesh(geometry, material);
    square.position.set(0, 0, 0); // Center it in the scene
    elementGroup.add(square); // Add the square to the group

    // Create the center text using a CanvasTexture
    const canvasCenter = document.createElement('canvas');
    const contextCenter = canvasCenter.getContext('2d');
    canvasCenter.width = 256;
    canvasCenter.height = 256;

    // Draw the center text
    contextCenter.fillStyle = 'black';
    contextCenter.font = 'bold 120px Arial';
    contextCenter.textAlign = 'center';
    contextCenter.textBaseline = 'middle';
    contextCenter.fillText(centerText, canvasCenter.width / 2, canvasCenter.height / 2);

    const textureCenter = new THREE.CanvasTexture(canvasCenter);
    const textMaterialCenter = new THREE.MeshBasicMaterial({ map: textureCenter, transparent: true });
    const textGeometryCenter = new THREE.PlaneGeometry(0.6, 0.6); // Match the text size to the square
    const textMeshCenter = new THREE.Mesh(textGeometryCenter, textMaterialCenter);
    textMeshCenter.position.set(0, 0, 0.01); // Slightly in front of the square
    elementGroup.add(textMeshCenter); // Add the text to the group

    // Create the number at the top right corner
    const canvasNum = document.createElement('canvas');
    const contextNum = canvasNum.getContext('2d');
    canvasNum.width = 256;
    canvasNum.height = 256;

    // Draw the number
    contextNum.fillStyle = 'black';
    contextNum.font = '120px Arial';
    contextNum.textAlign = 'right';
    contextNum.textBaseline = 'top';
    contextNum.fillText(topNumber, canvasNum.width - 50, 10); // Top right corner with some padding

    const textureNum = new THREE.CanvasTexture(canvasNum);
    const textMaterialNum = new THREE.MeshBasicMaterial({ map: textureNum, transparent: true });
    const textGeometryNum = new THREE.PlaneGeometry(0.18, 0.18); // Smaller plane for the number
    const textMeshNum = new THREE.Mesh(textGeometryNum, textMaterialNum);
    textMeshNum.position.set(0.22, 0.2, 0); // Position it relative to the square's top-right corner
    elementGroup.add(textMeshNum);

    // Create the bottom text below the square
    const canvasBottom = document.createElement('canvas');
    const contextBottom = canvasBottom.getContext('2d');
    canvasBottom.width = 256;
    canvasBottom.height = 256;

    // Draw the bottom text
    contextBottom.fillStyle = 'black';
    contextBottom.font = '50px Arial'; // Smaller font
    contextBottom.textAlign = 'center';
    contextBottom.textBaseline = 'bottom';
    contextBottom.fillText(bottomText, canvasBottom.width / 2, canvasBottom.height / 2);

    const textureBottom = new THREE.CanvasTexture(canvasBottom);
    const textMaterialBottom = new THREE.MeshBasicMaterial({ map: textureBottom, transparent: true });
    const textGeometryBottom = new THREE.PlaneGeometry(0.5, 0.5); // Rectangular plane for text
    const textMeshBottom = new THREE.Mesh(textGeometryBottom, textMaterialBottom);
    textMeshBottom.position.set(0, -0.25, 0.01); // Below the H, relative to center
    elementGroup.add(textMeshBottom);

    return elementGroup;
}

// Export the functions to be used in other scripts
export { createPeriodicElement };
