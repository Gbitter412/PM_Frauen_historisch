import { PuzzleFactory } from './PuzzleFactory.js';


// Spielmanager-Klasse zur Verwaltung des Spiels
export class GameManager {
    constructor(canvas, puzzleSequence) {
        this.canvas = canvas;
        this.puzzleSequence = puzzleSequence; // Ein Array von Objekten mit Puzzle-Typ und Bildpfad
        this.currentPuzzleIndex = 0;
        this.puzzle = null;
        this.solveButton = document.getElementById('solveButton');
        this.solveButton.addEventListener('click', () => this.handleSolveButtonClick());
      
        this.loadPuzzleData();
    }
    async loadPuzzleData() {
        try {
            const response = await fetch('./path/to/your/data.json'); // Stelle sicher, dass der Pfad korrekt ist
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.puzzleData = data.entries; // Die Daten werden in this.puzzleData gespeichert
            console.log(this.puzzleData); // Zum Testen, um sicherzustellen, dass die Daten geladen werden
        } catch (error) {
            console.error('Es gab ein Problem beim Laden der Daten:', error);
        }
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
    
    
            // Behandlung der Puzzle-Vervollständigung
            this.puzzle.onComplete(() => this.handlePuzzleComplete());
        };

        // Update button text and disable to avoid premature solving
        this.solveButton.textContent = 'Solve Puzzle';
        this.solveButton.disabled = false; // Enable button when puzzle is ready
    }

    // Handle puzzle completion
    handlePuzzleComplete() {
        // Update button text and enable it for the next puzzle
        this.solveButton.textContent = 'Next Puzzle';
        this.solveButton.disabled = false; // Enable button for the next puzzle

            // Hole die Informationen für das aktuelle Puzzle
    const currentEntry = this.puzzleData[this.currentPuzzleIndex];
    if (currentEntry) {
        this.showPuzzleInfo(currentEntry); // Zeige die Informationen an
    }

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

    
    // Funktion zur Anzeige der Puzzle-Informationen
showPuzzleInfo(puzzle) {
    const infoContainer = document.getElementById('infoContent'); // Container für die Info
    infoContainer.innerHTML = `
        <h2>${puzzle.name} ${puzzle.surname}</h2>
        <p>Geboren: ${puzzle.birth_year}</p>
        <p>Gestorben: ${puzzle.death_year}</p>
        <p>Herkunft: ${puzzle.origin}</p>
        <p>${puzzle.info}</p>
        <img src="${puzzle.image_path}" alt="${puzzle.name} ${puzzle.surname}" style="max-width: 100%; height: auto;" />
    `;

    const infoContainerDiv = document.getElementById('infoContainer');
    infoContainerDiv.style.display = 'block'; // Zeige den Info-Container an
}

}