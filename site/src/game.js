// Abstrakte Klasse für Puzzles
class Puzzle {
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

    // Methode zum Abschließen des Puzzles
    completePuzzle() {
        if (this.onCompleteCallback) {
            this.onCompleteCallback();
        }
    }

    // Abstrakte Methode zum Lösen des Puzzles
    solvePuzzle() {
        throw new Error("Method 'solvePuzzle()' must be implemented.");
    }
}

// Klasse für Schiebepuzzle
class SlidingPuzzle extends Puzzle {
    constructor(image, canvas, rows = 4, cols = 4) { // 4x4 Raster
        super(image, canvas);
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = this.canvas.width / this.cols;
        this.tileHeight = this.canvas.height / this.rows;
        this.tiles = [];
        this.emptyTile = { row: this.rows - 1, col: this.cols - 1 }; // Untere rechte Ecke ist anfangs leer
    }

    // Initialisierung des Schiebepuzzles
    init() {
        this.generateTiles();
        this.shuffleTiles();
        this.draw();
        this.canvas.addEventListener('click', (event) => this.handleUserInput(event));
    }

    // Generierung der Puzzleteile
    generateTiles() {
        this.tiles = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (row === this.emptyTile.row && col === this.emptyTile.col) continue;
                this.tiles.push({ row, col, originalRow: row, originalCol: col });
            }
        }
    }

    // Zufälliges Mischen der Puzzleteile
    shuffleTiles() {
        for (let i = 0; i < 100; i++) {
            const neighbors = this.getMovableTiles();
            const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
            this.swapTiles(randomNeighbor, this.emptyTile);
        }
    }

    // Zeichnen des Puzzles
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => {
            const { row, col, originalRow, originalCol } = tile;
            this.context.drawImage(
                this.image,
                originalCol * this.tileWidth, // Quell-x
                originalRow * this.tileHeight, // Quell-y
                this.tileWidth,                // Quellbreite
                this.tileHeight,               // Quellhöhe
                col * this.tileWidth,          // Ziel-x
                row * this.tileHeight,         // Ziel-y
                this.tileWidth,                // Zielbreite
                this.tileHeight                // Zielhöhe
            );
        });
    }

    // Behandlung der Benutzereingaben
    handleUserInput(event) {
        const { offsetX, offsetY } = event;
        const clickedCol = Math.floor(offsetX / this.tileWidth);
        const clickedRow = Math.floor(offsetY / this.tileHeight);

        const tile = this.tiles.find(t => t.row === clickedRow && t.col === clickedCol);

        if (tile && this.isAdjacentToEmpty(tile)) {
            this.swapTiles(tile, this.emptyTile);
            this.draw();
            if (this.checkCompletion()) {
                this.completePuzzle();
            }
        }
    }

    // Tauschen von zwei Puzzleteilen
    swapTiles(tile1, tile2) {
        const temp = { row: tile1.row, col: tile1.col };
        tile1.row = tile2.row;
        tile1.col = tile2.col;
        tile2.row = temp.row;
        tile2.col = temp.col;
    }

    // Überprüfen, ob ein Puzzleteil neben dem leeren Feld liegt
    isAdjacentToEmpty(tile) {
        const { row, col } = tile;
        const { row: emptyRow, col: emptyCol } = this.emptyTile;
        const isAdjacent = (
            (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
            (col === emptyCol && Math.abs(row - emptyRow) === 1)
        );
        return isAdjacent;
    }

    // Erhalten der beweglichen Puzzleteile
    getMovableTiles() {
        return this.tiles.filter(tile => this.isAdjacentToEmpty(tile));
    }

    // Überprüfen, ob das Puzzle gelöst ist
    checkCompletion() {
        return this.tiles.every(tile => tile.row === tile.originalRow && tile.col === tile.originalCol);
    }

    // Lösen des Puzzles
    solvePuzzle() {
        this.tiles.forEach(tile => {
            tile.row = tile.originalRow;
            tile.col = tile.originalCol;
        });
        this.emptyTile = { row: this.rows - 1, col: this.cols - 1 };
        this.draw();
        this.completePuzzle();
    }
}

// Klasse für Tauschpuzzle
class SwappingPuzzle extends Puzzle {
    constructor(image, canvas, rows = 4, cols = 4) {
        super(image, canvas);
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = this.canvas.width / this.cols;
        this.tileHeight = this.canvas.height / this.rows;
        this.tiles = [];
        this.selectedTile = null; // Verfolgt das aktuell ausgewählte Puzzleteil zum Tauschen
    }

    // Initialisierung des Tauschpuzzles
    init() {
        this.generateTiles();
        this.shuffleTiles();
        this.draw();
        this.canvas.addEventListener('click', (event) => this.handleUserInput(event));
    }

    // Generierung der Puzzleteile
    generateTiles() {
        this.tiles = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.tiles.push({ row, col, originalRow: row, originalCol: col });
            }
        }
    }

    // Zufälliges Mischen der Puzzleteile
    shuffleTiles() {
        // Fisher-Yates Shuffle zum zufälligen Anordnen der Puzzleteile
        for (let i = this.tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            // Positionen im Array tauschen
            [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
            
            // `row` und `col` Eigenschaften der getauschten Puzzleteile an ihre neuen Positionen anpassen
            let tempRow = this.tiles[i].row;
            let tempCol = this.tiles[i].col;
            this.tiles[i].row = this.tiles[j].row;
            this.tiles[i].col = this.tiles[j].col;
            this.tiles[j].row = tempRow;
            this.tiles[j].col = tempCol;
        }
    }

    // Zeichnen des Puzzles
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => {
            const { row, col, originalRow, originalCol } = tile;
            this.context.drawImage
            this.context.drawImage(
                this.image,
                originalCol * this.tileWidth, // Quell-x
                originalRow * this.tileHeight, // Quell-y
                this.tileWidth,                // Quellbreite
                this.tileHeight,               // Quellhöhe
                col * this.tileWidth,          // Ziel-x
                row * this.tileHeight,         // Ziel-y
                this.tileWidth,                // Zielbreite
                this.tileHeight                // Zielhöhe
            );

            // Hervorheben des ausgewählten Puzzleteils mit einem roten Rahmen
            if (this.selectedTile && this.selectedTile.row === row && this.selectedTile.col === col) {
                this.context.strokeStyle = 'red';
                this.context.lineWidth = 4;
                this.context.strokeRect(
                    col * this.tileWidth,
                    row * this.tileHeight,
                    this.tileWidth,
                    this.tileHeight
                );
            }
        });
    }

    // Behandlung der Benutzereingaben
    handleUserInput(event) {
        const { offsetX, offsetY } = event;
        const clickedCol = Math.floor(offsetX / this.tileWidth);
        const clickedRow = Math.floor(offsetY / this.tileHeight);

        const tile = this.tiles.find(t => t.row === clickedRow && t.col === clickedCol);

        if (tile) {
            if (!this.selectedTile) {
                this.selectedTile = tile; // Erstes Puzzleteil auswählen
            } else {
                this.swapTiles(this.selectedTile, tile); // Mit dem zweiten Puzzleteil tauschen
                this.selectedTile = null; // Auswahl nach dem Tauschen aufheben
                this.draw();
                if (this.checkCompletion()) {
                    this.completePuzzle();
                }
            }

            this.draw(); // Canvas neu zeichnen, um die Hervorhebung des ausgewählten Puzzleteils anzuzeigen
        }
    }

    // Tauschen von zwei Puzzleteilen
    swapTiles(tile1, tile2) {
        const temp = { row: tile1.row, col: tile1.col };
        tile1.row = tile2.row;
        tile1.col = tile2.col;
        tile2.row = temp.row;
        tile2.col = temp.col;
    }

    // Überprüfen, ob das Puzzle gelöst ist
    checkCompletion() {
        return this.tiles.every(tile => tile.row === tile.originalRow && tile.col === tile.originalCol);
    }

    // Lösen des Puzzles
    solvePuzzle() {
        this.tiles.forEach(tile => {
            tile.row = tile.originalRow;
            tile.col = tile.originalCol;
        });
        this.draw();
        this.completePuzzle();
    }
}

// Klasse für klassische Puzzles
class ClassicPuzzle extends Puzzle {
    // Implementierung der spezifischen Logik für klassische Puzzles
    init() {
        // Initialisierung des klassischen Puzzles
    }

    draw() {
        // Zeichnen des klassischen Puzzles
    }

    handleUserInput(event) {
        // Behandlung der Benutzereingaben für das klassische Puzzle
    }

    checkCompletion() {
        // Überprüfen, ob das klassische Puzzle gelöst ist
    }

    solvePuzzle() {
        // Lösen des klassischen Puzzles
    }
}

// Fabrikklasse zur Erstellung von Puzzles
class PuzzleFactory {
    static createPuzzle(type, image, canvas, options = {}) {
        switch (type) {
            case 'sliding':
                return new SlidingPuzzle(image, canvas, options.rows, options.cols);
            case 'swapping':
                return new SwappingPuzzle(image, canvas, options.rows, options.cols);
            case 'classic':
                return new ClassicPuzzle(image, canvas, options.pieces);
            default:
                throw new Error('Unknown puzzle type');
        }
    }
}

// Timer-Klasse zur Verwaltung der Zeit
class Timer {
    constructor(duration, onTick, onComplete) {
        this.duration = duration;
        this.timeLeft = duration;
        this.interval = null;
        this.onTick = onTick;
        this.onComplete = onComplete;
    }

    // Starten des Timers
    start() {
        this.timeLeft = this.duration;
        this.interval = setInterval(() => {
            this.timeLeft--;
            this.onTick(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.stop();
                this.onComplete();
            }
        }, 1000); // 1-Sekunden-Intervall
    }

    // Stoppen des Timers
    stop() {
        clearInterval(this.interval);
    }

    // Zurücksetzen des Timers
    reset() {
        this.timeLeft = this.duration;
        this.stop();
    }
}

// Spielmanager-Klasse zur Verwaltung des Spiels
class GameManager {
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