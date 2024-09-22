import { Puzzle } from './Puzzle.js';

// Klasse für Schiebepuzzle
export class SlidingPuzzle extends Puzzle {
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