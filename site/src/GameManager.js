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
    
            // Initialisieren und Starten des Timers
            this.timer = new Timer(
                this.totalTimePerPuzzle,
                (timeLeft) => this.updateTimeUI(timeLeft),
                () => this.handlePuzzleTimeout()
            );
            this.timer.start();
    
            // Behandlung der Puzzle-Vervollständigung
            this.puzzle.onComplete(() => this.handlePuzzleComplete());
        };
    }

    // Behandlung der Puzzle-Vervollständigung
    handlePuzzleComplete() {
        this.timer.stop();
        const scoreForThisPuzzle = this.timer.timeLeft * 10; // Beispiel für eine Punktelogik
        this.totalScore += scoreForThisPuzzle;
        this.updateScoreUI();
        this.currentPuzzleIndex++;
        this.startNextPuzzle();
    }

    // Behandlung des Zeitablaufs für ein Puzzle
    handlePuzzleTimeout() {
        console.log("Time's up!");
        this.currentPuzzleIndex++;
        this.startNextPuzzle();
    }

    // Aktualisieren der Zeit-UI
    updateTimeUI(timeLeft) {
        document.getElementById('timeLeft').innerText = timeLeft;
    }

    // Aktualisieren der Punkte-UI
    updateScoreUI() {
        document.getElementById('totalScore').innerText = this.totalScore;
    }

    // Beenden des Spiels
    endGame() {
        console.log("Game Over! Final Score: " + this.totalScore);
        alert("Game Over! Final Score: " + this.totalScore);
    }
}