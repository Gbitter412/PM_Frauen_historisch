import { handleEndGame } from './endGame.js';

let bonesFound = 0; // Number of bones found
const totalBars = 5; // Total parts of the gauge
let gaugeImage; // To hold the gauge image mesh

// Function to initialize the gauge
function initGauge(scene) {
    const textureLoader = new THREE.TextureLoader();
    const gaugeTexture = textureLoader.load('../assets/img/gauge.png');

    // Create a mesh for the gauge
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ 
        map: gaugeTexture, 
        transparent: true,
        opacity: 1, // Fully visible, but we'll use a grayscale shader to modify color
    });

    gaugeImage = new THREE.Mesh(geometry, material);
    gaugeImage.position.set(-4, 0, 0); // Position it to the left side
    scene.add(gaugeImage);

    // Apply grayscale effect initially
    applyGrayscale(gaugeImage);
}

// Function to apply grayscale shader
function applyGrayscale(mesh) {
    const grayscaleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            tDiffuse: { value: mesh.material.map },
            uGray: { value: 1.0 }, // Start fully gray
            uBoneLevel: { value: 0.0 } // How much color is restored
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;
            uniform sampler2D tDiffuse;
            uniform float uGray;
            uniform float uBoneLevel; // Fraction of color to restore

            void main() {
                vec4 color = texture2D(tDiffuse, vUv);
                // Convert to grayscale
                float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114)); // Using luminance formula
                
                // Calculate the height of the filled portion
                float filledHeight = step(vUv.y, uBoneLevel);
                vec3 restoredColor = mix(vec3(gray), color.rgb, filledHeight);
                
                gl_FragColor = vec4(restoredColor, color.a); // Apply restored color
            }
        `,
        transparent: true,
    });

    mesh.material = grayscaleMaterial;
}

// Function to update the gauge when a bone is found
function onBoneFound() {
    if (bonesFound < totalBars) {
        bonesFound++; // Increment the counter
        const currentBoneLevel = bonesFound * 0.2; // Each bone increases the filled height by 20%
        gaugeImage.material.uniforms.uBoneLevel.value = currentBoneLevel; // Update the height of filled portion

        // If all bones are found, trigger the end game logic
        if (bonesFound === totalBars) {
            handleEndGame();
        }
    }
}

// Function to reset the gauge
function resetGauge() {
    bonesFound = 0; // Reset the number of bones found
    gaugeImage.material.uniforms.uBoneLevel.value = 0.0; // Reset the gauge visual representation
}

// Export the init function and the onBoneFound function
export { initGauge, onBoneFound, resetGauge };
