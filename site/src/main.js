import { GameManager } from './GameManager.js';

// Generation of random puzzle types
const puzzleTypes = ['sliding', 'swapping']; // add puzzle types here
const randomPuzzles = ((puzzles, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * puzzles.length);
      result.push(puzzles[randomIndex]);
    }
    return result;
}) (puzzleTypes, 10); // change the length of the game here

// Generate the sequence of puzzles
const puzzleSequence = (() => {
    const result = [];
    for (let index = 0; index < randomPuzzles.length; index++) {
        result.push({ type: randomPuzzles[index], imagePath: './assets/img/test_img.jpg' });
    }
    return result;
}) ();

const totalTimePerPuzzle = 60; // 60 Sekunden pro Puzzle
const canvas = document.getElementById('puzzleCanvas');
const gameManager = new GameManager(canvas, puzzleSequence, totalTimePerPuzzle);
gameManager.startNextPuzzle();

// Hinzufügen der Funktionalität für die "Solve Puzzle"-Schaltfläche
document.getElementById('solveButton').addEventListener('click', () => {
    if (gameManager.puzzle) {
        gameManager.puzzle.solvePuzzle();
    }
});