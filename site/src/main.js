import { GameManager } from './GameManager.js';

// Verwendung des Spielmanagers
const canvas = document.getElementById('puzzleCanvas');
const puzzleSequence = [
    { type: 'swapping', imagePath: './assets/test_img.jpg' }
];
const totalTimePerPuzzle = 60; // 60 Sekunden pro Puzzle
const gameManager = new GameManager(canvas, puzzleSequence, totalTimePerPuzzle);
gameManager.startNextPuzzle();

// Hinzufügen der Funktionalität für die "Solve Puzzle"-Schaltfläche
document.getElementById('solveButton').addEventListener('click', () => {
    if (gameManager.puzzle) {
        gameManager.puzzle.solvePuzzle();
    }
});