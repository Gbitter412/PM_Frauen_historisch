import { GameManager } from './GameManager.js';

// Generierung vom Puzzle-Typ
const puzzleTypes = ['swapping']

// Wähle einen zufälligen Puzzle-Typ aus
const selectedPuzzleType = puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)];

// Erstelle eine Liste mit 30 Puzzles vom gleichen Typ
const randomPuzzles = Array(1000).fill(selectedPuzzleType); // ändere hier die Länge des Spiels

// Generiere die Sequenz der Puzzles
const puzzleSequence = (() => {
    const result = []

    //Hier müssen alle Bildpfade einzeln eingegeben werden
    const imagePaths = [
        '../assets/img/1.jpg',
        '../assets/img/2.jpg',
        '../assets/img/10.jpg',
        '../assets/img/11.jpg',
        '../assets/img/12.jpg',
        '../assets/img/13.jpg',
        '../assets/img/14.jpg.jpg',
        '../assets/img/15.png',
        '../assets/img/16.jpg',
        '../assets/img/17.jpg',
        '../assets/img/18.jpg',
        '../assets/img/19.jpg',
        '../assets/img/20.jpg',
        '../assets/img/21.jpg',
        '../assets/img/22.jpg',
        '../assets/img/23.jpg',
        '../assets/img/24.jpg',
        '../assets/img/25.jpg',

    ];

    //nach 18 mal spielen, wird erst wieder das erste Random Bild wiederholt
    const recentImages = [];
    const recentLimit = 18;

    //Funktion, um ein zufälliges Bild aus Array imagePaths auszuwählen
    //es werden nur Bilder ausgewählt, die nicht in recentImages sind - um Wiederholungen zu vermeiden
    const getRandomImage = () => {
        let availableImages = imagePaths.filter(image => !recentImages.includes(image));
        const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
        
        // Fügt das Bild zu recentImages hinzu und behält die letzten 18 Einträge
        recentImages.push(randomImage);
        if (recentImages.length > recentLimit) {
            recentImages.shift();  // Entferne das älteste Bild, um die Größe des Arrays auf recentLimit zu beschränken
        }
        
        return randomImage;
    };


    for (let index = 0; index < randomPuzzles.length; index++) {

        const imagePath = getRandomImage();
        result.push({ type: randomPuzzles[index], imagePath: imagePath });
    }
    return result;
}) ();

// Gesamtzeit pro Puzzle
const canvas = document.getElementById('puzzleCanvas');
const gameManager = new GameManager(canvas, puzzleSequence);
gameManager.startNextPuzzle();