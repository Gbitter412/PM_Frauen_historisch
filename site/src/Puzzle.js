// Abstrakte Klasse für Puzzles
export class Puzzle {
    constructor(image, canvas) {
        if (this.constructor === Puzzle) {
            throw new Error("Cannot instantiate abstract class 'Puzzle'");
        }
        this.image = image;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.onCompleteCallback = null;
    }

    // Methode zum Setzen des Callback für Puzzle-Vervollständigung
    onComplete(callback) {
        this.onCompleteCallback = callback;
    }

    // Abstrakte Methoden, die in Unterklassen implementiert werden müssen
    init() {
        throw new Error("Method 'init()' must be implemented.");
    }

    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }

    handleUserInput(event) {
        throw new Error("Method 'handleUserInput()' must be implemented.");
    }

    checkCompletion() {
        throw new Error("Method 'checkCompletion()' must be implemented.");
    }

    solvePuzzle() {
        throw new Error("Method 'solvePuzzle()' must be implemented.");
    }

    // Neue abstrakte Methode zum Überprüfen, ob das Puzzle gelöst ist
    isSolved() {
        throw new Error("Method 'isSolved()' must be implemented.");
    }

    // Methode zum Abschließen des Puzzles
    completePuzzle() {
        if (this.onCompleteCallback) {
            this.onCompleteCallback();
        }
    }
}