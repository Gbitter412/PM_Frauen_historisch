import { PuzzleFactory } from './PuzzleFactory.js';  // Importiere die PuzzleFactory-Klasse

// Spielmanager-Klasse zur Verwaltung des Spiels
export class GameManager {
    constructor(canvas, puzzleSequence, imageIndex) {
        this.canvas = canvas;  // Das Canvas-Element, auf dem das Puzzle gezeichnet wird
        this.puzzleSequence = puzzleSequence;  // Die Sequenz der Puzzles, die im Spiel verwendet werden
        this.currentPuzzleIndex = imageIndex;  // Der Index des aktuellen Puzzles in der Sequenz
        this.puzzle = null;  // Das aktuelle Puzzle-Objekt
        this.solveButton = document.getElementById('solveButton');  // Der Button zum Lösen des Puzzles
        this.solveButton.addEventListener('click', () => this.handleSolveButtonClick());  // Event-Listener für den Button

        this.loadPuzzleData();  // Lade die Puzzle-Daten (z.B. aus einer JSON-Datei)
    }

    // Methode zum Laden der Puzzle-Daten
    async loadPuzzleData() {
        try {
            const response = await fetch('../data.json');  // Angepasster Pfad zur JSON-Datei
            if (!response.ok) {
                throw new Error('Network response was not ok');  // Fehlerbehandlung bei Netzwerkproblemen
            }
            const data = await response.json();  // Konvertiere die Antwort in ein JSON-Objekt
            this.puzzleData = data.entries;  // Speichere die Daten für die spätere Verwendung
        } catch (error) {
            console.error('Es gab ein Problem beim Laden der Daten:', error);  // Fehlerbehandlung
        }
    }

// Methode zum Starten des nächsten Puzzles
startNextPuzzle() {
    if (this.puzzle && !this.puzzle.isSolved()) {
        // Falls das aktuelle Puzzle noch nicht vollständig gelöst ist, zeige eine Warnung oder ignoriere den Aufruf
        console.warn('Das aktuelle Puzzle ist noch nicht vollständig gelöst!');
        return;
    }

    if (this.currentPuzzleIndex >= this.puzzleSequence.length) {
        this.endGame();  // Beende das Spiel, wenn alle Puzzles abgeschlossen sind
        return;
    }

    const { type, imagePath } = this.puzzleSequence[this.currentPuzzleIndex];  // Hole den Puzzle-Typ und den Bildpfad für das aktuelle Puzzle

    // Lade das Bild für das aktuelle Puzzle
    const image = new Image();
    image.src = imagePath;
    image.onload = () => {
        this.puzzle = PuzzleFactory.createPuzzle(type, image, this.canvas);  // Erstelle das Puzzle mit der PuzzleFactory
        this.puzzle.init();  // Initialisiere das Puzzle
        this.puzzle.draw();  // Zeichne das Puzzle auf das Canvas

        // Behandlung der Puzzle-Vervollständigung
        this.puzzle.onComplete(() => this.handlePuzzleComplete());  // Weise den handlePuzzleComplete-Handler zu
    };

    this.solveButton.textContent = 'Solve Puzzle';  // Setze den Text des Buttons auf "Solve Puzzle"
    this.solveButton.disabled = false;  // Aktiviere den Button
}


// In GameManager.js
handlePuzzleComplete() {
    this.showPuzzleInfo();  // Zeige die Puzzle-Informationen an
    this.showCompletionMessage();  // Zeige die Nachricht "Puzzle gelöst" an
    this.solveButton.textContent = 'Next';  // Setze den Text des Buttons auf "Next Puzzle"
    this.solveButton.disabled = false;  // Aktiviere den Button
}

// Neue Methode zur Anzeige der Nachricht
showCompletionMessage() {
    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.innerHTML = '<p style="font-size: 1.5em; color: green;">Puzzle gelöst!</p>';

    const puzzleContainer = document.getElementById('puzzleContainer');
    puzzleContainer.appendChild(messageContainer);
}


// Methode zur Behandlung von Klicks auf den Solve-Button
handleSolveButtonClick() {
    if (this.solveButton.textContent === 'Next') {
        // Nach jedem gelösten Puzzle zur lueckentext.html-Seite weiterleiten
        window.location.href = 'lueckentext.html';
    } else if (this.puzzle) {
        this.puzzle.solvePuzzle();  // Löse das Puzzle, wenn der Button gedrückt wird
    }
}

// Methode zur Anzeige der Puzzle-Informationen
showPuzzleInfo() {
    if (!this.puzzleData || !this.puzzleData[this.currentPuzzleIndex]) {
        console.error('Keine Daten gefunden oder ungültiger Puzzle-Index');
        return;  // Breche ab, wenn keine Daten vorhanden sind
    }

    const currentEntry = this.puzzleData[this.currentPuzzleIndex];
    if (currentEntry) {
        const infoContainer = document.getElementById('infoContent');
        infoContainer.innerHTML = `
            <h2>${currentEntry.name} ${currentEntry.surname}</h2>
            <p>Geboren: ${currentEntry.birth_year}</p>
            <p>Gestorben: ${currentEntry.death_year}</p>
            <p>Herkunft: ${currentEntry.origin}</p>
            <p>${currentEntry.info}</p>
        `;

        const infoContainerDiv = document.getElementById('infoContainer');
        infoContainerDiv.style.display = 'block';  // Zeige den Info-Container an

        const gameContainer = document.getElementById('gameContainer');
        gameContainer.classList.add('show-info');  // Aktiviert das symmetrische Layout
    }
}

    // Methode zum Beenden des Spiels
    endGame() {
        alert('Herzlichen Glückwunsch! Du hast alle Puzzles abgeschlossen!');  // Zeige eine Nachricht an
        // Hier könnten weitere Aktionen wie das Zurückkehren zum Hauptmenü erfolgen
    }
}