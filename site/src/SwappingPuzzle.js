import { Puzzle } from './Puzzle.js';

// Klasse für Tauschpuzzle
export class SwappingPuzzle extends Puzzle {
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
                this.context.lineWidth = 2;
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
                if (this.isSolved()) { // Verwende hier isSolved
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

    // Umbenennung der Methode checkCompletion zu isSolved
    isSolved() {
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