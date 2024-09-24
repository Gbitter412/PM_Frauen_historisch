import { GameManager } from './GameManager.js';

// Generierung von zufälligen Puzzle-Typen
//const puzzleTypes = ['sliding', 'swapping']; // füge hier Puzzle-Typen hinzu
const puzzleTypes = ['swapping']

// Wähle einen zufälligen Puzzle-Typ aus
const selectedPuzzleType = puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)];

// Erstelle eine Liste mit 10 Puzzles vom gleichen Typ
const randomPuzzles = Array(10).fill(selectedPuzzleType); // ändere hier die Länge des Spiels

// Generiere die Sequenz der Puzzles
const puzzleSequence = (() => {
    const result = [];

    //Hier müssen alle Bildpfade einzeln eingegeben werden
    const imagePaths = [
        '../assets/img/1.jpg',
        '../assets/img/2.jpg',
        '../assets/img/3.jpg',
        '../assets/img/4.jpg',
        '../assets/img/5.jpg',
        '../assets/img/6.jpg',
        '../assets/img/7.jpg',
        '../assets/img/8.jpg',
        '../assets/img/9.jpg',
        '../assets/img/10.jpg',
        '../assets/img/11.jpg',
        '../assets/img/12.jpg',
        '../assets/img/13.jpg',
        '../assets/img/14.jpg',
        '../assets/img/15.jpg',
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
        '../assets/img/26.jpg',
        '../assets/img/27.jpg',
        '../assets/img/28.jpg',
        '../assets/img/29.jpg',
        '../assets/img/30.jpg',
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
const totalTimePerPuzzle = 60 * 10; // 60 Sekunden pro Puzzle
const canvas = document.getElementById('puzzleCanvas');
const gameManager = new GameManager(canvas, puzzleSequence, totalTimePerPuzzle);
gameManager.startNextPuzzle();