// Function to create a cube with textures on two opposite faces
function createTile(hasFossil, grassTexture, holeTexture, boneTexture) {
    const squareGroup = new THREE.Group();
    squareGroup.userData = {
        hasFossil: hasFossil,
        clicked: false // Initialize clicked state
    };

    // Create cube geometry (6 faces, but we'll only texture two)
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.1); // A thin cube to simulate a tile

    // Materials array for each face of the cube (6 materials for 6 faces)
    const materials = [
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Left side - transparent
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Right side - transparent
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Top side - transparent
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Bottom side - transparent
        new THREE.MeshBasicMaterial({ map: grassTexture }),             // Front side - grass texture
        new THREE.MeshBasicMaterial({ map: hasFossil ? boneTexture : holeTexture })  // Back side - hole or bone
    ];

    // Create the mesh with the cube geometry and the materials array
    const square = new THREE.Mesh(geometry, materials);
    
    // Add the mesh to the group
    squareGroup.add(square);

    return squareGroup;
}

export { createTile };
