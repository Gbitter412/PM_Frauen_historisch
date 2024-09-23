import { GameManager } from './GameManager.js';

// Generierung von zufälligen Puzzle-Typen
const puzzleTypes = ['sliding', 'swapping']; // füge hier Puzzle-Typen hinzu

// Wähle einen zufälligen Puzzle-Typ aus
const selectedPuzzleType = puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)];

// Erstelle eine Liste mit 10 Puzzles vom gleichen Typ
const randomPuzzles = Array(10).fill(selectedPuzzleType); // ändere hier die Länge des Spiels

// Generiere die Sequenz der Puzzles
const puzzleSequence = (() => {
    const result = [];
    for (let index = 0; index < randomPuzzles.length; index++) {
        result.push({ type: randomPuzzles[index], imagePath: './assets/img/test_img.jpg' });
    }
    return result;
}) ();

// Gesamtzeit pro Puzzle
const totalTimePerPuzzle = 60 * 10; // 60 Sekunden pro Puzzle
const canvas = document.getElementById('puzzleCanvas');
const gameManager = new GameManager(canvas, puzzleSequence, totalTimePerPuzzle);
gameManager.startNextPuzzle();