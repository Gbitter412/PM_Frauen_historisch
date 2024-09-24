import { PuzzleFactory } from './PuzzleFactory.js';
import { Timer } from './Timer.js';

// Spielmanager-Klasse zur Verwaltung des Spiels
export class GameManager {
    constructor(canvas, puzzleSequence, totalTimePerPuzzle) {
        this.canvas = canvas;
        this.puzzleSequence = puzzleSequence; // Ein Array von Objekten mit Puzzle-Typ und Bildpfad
        this.currentPuzzleIndex = 0;
        this.totalTimePerPuzzle = totalTimePerPuzzle;
        this.totalScore = 0;
        this.timer = null;
        this.puzzle = null;
        this.solveButton = document.getElementById('solveButton');
        this.solveButton.addEventListener('click', () => this.handleSolveButtonClick());
    }

    // Starten des nächsten Puzzles
    startNextPuzzle() {
        if (this.currentPuzzleIndex >= this.puzzleSequence.length) {
            this.endGame();
            return;
        }

        const { type, imagePath } = this.puzzleSequence[this.currentPuzzleIndex];
        
        // Laden des Bildes für das aktuelle Puzzle
        const image = new Image();
        image.src = imagePath;
        image.onload = () => {
            this.puzzle = PuzzleFactory.createPuzzle(type, image, this.canvas);
            this.puzzle.init();
            this.puzzle.draw();
    

            this.timer.start();
    
            // Behandlung der Puzzle-Vervollständigung
            this.puzzle.onComplete(() => this.handlePuzzleComplete());
        };

        // Update button text and disable to avoid premature solving
        this.solveButton.textContent = 'Solve Puzzle';
        this.solveButton.disabled = false; // Enable button when puzzle is ready
    }

    // Handle puzzle completion
    handlePuzzleComplete() {
        this.timer.stop();
        const scoreForThisPuzzle = this.timer.timeLeft * 10; // Example scoring logic
        this.totalScore += scoreForThisPuzzle;
        this.updateScoreUI();
        
        // Update button text and enable it for the next puzzle
        this.solveButton.textContent = 'Next Puzzle';
        this.solveButton.disabled = false; // Enable button for the next puzzle
    }

    // Handle "Solve Puzzle" or "Next Puzzle" button click
    handleSolveButtonClick() {
        if (this.solveButton.textContent === 'Next Puzzle') {
            this.currentPuzzleIndex++;
            this.startNextPuzzle();
        } else if (this.puzzle) {
            this.puzzle.solvePuzzle();
        }
    }



    // Beenden des Spiels
    endGame() {
        console.log("Game Over! Final Score: " + this.totalScore);
        alert("Game Over! Final Score: " + this.totalScore);
        this.solveButton.disabled = true; // Disable the button after the game ends
    }
}