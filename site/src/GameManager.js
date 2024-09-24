import { PuzzleFactory } from './PuzzleFactory.js';


// Spielmanager-Klasse zur Verwaltung des Spiels
export class GameManager {
    constructor(canvas, puzzleSequence) {
        this.canvas = canvas;
        this.puzzleSequence = puzzleSequence; // Ein Array von Objekten mit Puzzle-Typ und Bildpfad
        this.currentPuzzleIndex = 0;
        this.puzzle = null;

        
                this.solveButton = document.getElementById('solveButton');

        this.puzzleInfoDiv = document.getElementById('puzzleInfo');
        this.infoName = document.getElementById('infoName');
        this.infoDetails = document.getElementById('infoDetails');
        this.infoOrigin = document.getElementById('infoOrigin');  // Für Herkunft
        this.infoBirthDeath = document.getElementById('infoBirthDeath');  // Für Geburts- und Sterbejahre

        this.solveButton.addEventListener('click', () => this.handleSolveButtonClick());
    }

    // Start the next puzzle
    startNextPuzzle() {
        // Hide the puzzle info on new puzzle start
        this.puzzleInfoDiv.style.display = 'none';
        
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
    
    
            // Behandlung der Puzzle-Vervollständigung
            this.puzzle.onComplete(() => this.handlePuzzleComplete());
        };

        // Update button text and disable to avoid premature solving
        this.solveButton.textContent = 'Solve Puzzle';
        this.solveButton.disabled = false; // Enable button when puzzle is ready
    }


// Handle puzzle completion
handlePuzzleComplete() {
    // Show puzzle info
    const currentPuzzleInfo = this.puzzleSequence[this.currentPuzzleIndex];
    this.infoName.textContent = currentPuzzleInfo.name + " " + currentPuzzleInfo.surname;
    this.infoDetails.textContent = currentPuzzleInfo.info;
    this.puzzleInfoDiv.style.display = 'block'; // Show the puzzle info

    // Update button text for the next puzzle
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

}