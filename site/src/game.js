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

    onComplete(callback) {
        this.onCompleteCallback = callback;
    }

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

    completePuzzle() {
        if (this.onCompleteCallback) {
            this.onCompleteCallback();
        }
    }
}

class SlidingPuzzle extends Puzzle {
    constructor(image, canvas, rows = 3, cols = 3) {
        super(image, canvas);
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = this.canvas.width / this.cols;
        this.tileHeight = this.canvas.height / this.rows;
        this.tiles = [];
        this.emptyTile = { row: this.rows - 1, col: this.cols - 1 }; // Bottom-right corner is initially empty
    }

    init() {
        this.generateTiles();
        this.shuffleTiles();
        this.draw();
        this.canvas.addEventListener('click', (event) => this.handleUserInput(event));
    }

    generateTiles() {
        this.tiles = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (row === this.emptyTile.row && col === this.emptyTile.col) continue;
                this.tiles.push({ row, col, originalRow: row, originalCol: col });
            }
        }
    }

    shuffleTiles() {
        for (let i = 0; i < 100; i++) {
            const neighbors = this.getMovableTiles();
            const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
            this.swapTiles(randomNeighbor, this.emptyTile);
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => {
            const { row, col, originalRow, originalCol } = tile;
            this.context.drawImage(
                this.image,
                originalCol * this.tileWidth, // Source x
                originalRow * this.tileHeight, // Source y
                this.tileWidth,                // Source width
                this.tileHeight,               // Source height
                col * this.tileWidth,          // Destination x
                row * this.tileHeight,         // Destination y
                this.tileWidth,                // Destination width
                this.tileHeight                // Destination height
            );
        });
    }

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

    swapTiles(tile1, tile2) {
        const temp = { row: tile1.row, col: tile1.col };
        tile1.row = tile2.row;
        tile1.col = tile2.col;
        tile2.row = temp.row;
        tile2.col = temp.col;
    }

    isAdjacentToEmpty(tile) {
        const { row, col } = tile;
        const { row: emptyRow, col: emptyCol } = this.emptyTile;
        const isAdjacent = (
            (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
            (col === emptyCol && Math.abs(row - emptyRow) === 1)
        );
        return isAdjacent;
    }

    getMovableTiles() {
        return this.tiles.filter(tile => this.isAdjacentToEmpty(tile));
    }

    checkCompletion() {
        return this.tiles.every(tile => tile.row === tile.originalRow && tile.col === tile.originalCol);
    }
}

class SwappingPuzzle extends Puzzle {
    constructor(image, canvas, rows = 4, cols = 4) {
        super(image, canvas);
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = this.canvas.width / this.cols;
        this.tileHeight = this.canvas.height / this.rows;
        this.tiles = [];
        this.selectedTile = null; // Tracks the currently selected tile for swapping
    }

    init() {
        this.generateTiles();
        this.shuffleTiles();
        this.draw();
        this.canvas.addEventListener('click', (event) => this.handleUserInput(event));
    }

    generateTiles() {
        this.tiles = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.tiles.push({ row, col, originalRow: row, originalCol: col });
            }
        }
    }

    shuffleTiles() {
        // Fisher-Yates shuffle to randomly rearrange the tiles
        for (let i = this.tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            // Swap the positions in the array
            [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
            
            // Swap the `row` and `col` properties of the swapped tiles to match their new positions
            let tempRow = this.tiles[i].row;
            let tempCol = this.tiles[i].col;
            this.tiles[i].row = this.tiles[j].row;
            this.tiles[i].col = this.tiles[j].col;
            this.tiles[j].row = tempRow;
            this.tiles[j].col = tempCol;
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => {
            const { row, col, originalRow, originalCol } = tile;
            this.context.drawImage(
                this.image,
                originalCol * this.tileWidth, // Source x
                originalRow * this.tileHeight, // Source y
                this.tileWidth,                // Source width
                this.tileHeight,               // Source height
                col * this.tileWidth,          // Destination x
                row * this.tileHeight,         // Destination y
                this.tileWidth,                // Destination width
                this.tileHeight                // Destination height
            );

            // Highlight the selected tile with a red border
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

    handleUserInput(event) {
        const { offsetX, offsetY } = event;
        const clickedCol = Math.floor(offsetX / this.tileWidth);
        const clickedRow = Math.floor(offsetY / this.tileHeight);

        const tile = this.tiles.find(t => t.row === clickedRow && t.col === clickedCol);

        if (tile) {
            if (!this.selectedTile) {
                this.selectedTile = tile; // Select the first tile
            } else {
                this.swapTiles(this.selectedTile, tile); // Swap with the second tile
                this.selectedTile = null; // Deselect the tile after swapping
                this.draw();
                if (this.checkCompletion()) {
                    this.completePuzzle();
                }
            }
            this.draw(); // Redraw the canvas to show the selected tile highlight
        }
    }

    swapTiles(tile1, tile2) {
        const temp = { row: tile1.row, col: tile1.col };
        tile1.row = tile2.row;
        tile1.col = tile2.col;
        tile2.row = temp.row;
        tile2.col = temp.col;
    }

    checkCompletion() {
        return this.tiles.every(tile => tile.row === tile.originalRow && tile.col === tile.originalCol);
    }
}

class ClassicPuzzle extends Puzzle {
    // Implement the classic puzzle specific logic
    init() {
        // Initialize classic puzzle
    }

    draw() {
        // Draw the puzzle
    }

    handleUserInput(event) {
        // Handle user interaction
    }

    checkCompletion() {
        // Check if puzzle is solved
    }
}

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

class Timer {
    constructor(duration, onTick, onComplete) {
        this.duration = duration;
        this.timeLeft = duration;
        this.interval = null;
        this.onTick = onTick;
        this.onComplete = onComplete;
    }

    start() {
        this.timeLeft = this.duration;
        this.interval = setInterval(() => {
            this.timeLeft--;
            this.onTick(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.stop();
                this.onComplete();
            }
        }, 1000); // 1 second interval
    }

    stop() {
        clearInterval(this.interval);
    }

    reset() {
        this.timeLeft = this.duration;
        this.stop();
    }
}

class GameManager {
    constructor(canvas, puzzleSequence, totalTimePerPuzzle) {
        this.canvas = canvas;
        this.puzzleSequence = puzzleSequence; // An array of objects with puzzle type and image path
        this.currentPuzzleIndex = 0;
        this.totalTimePerPuzzle = totalTimePerPuzzle;
        this.totalScore = 0;
        this.timer = null;
        this.puzzle = null;
    }

    startNextPuzzle() {
        if (this.currentPuzzleIndex >= this.puzzleSequence.length) {
            this.endGame();
            return;
        }

        const { type, imagePath } = this.puzzleSequence[this.currentPuzzleIndex];
        
        // Load the image for the current puzzle
        const image = new Image();
        image.src = imagePath;
        image.onload = () => {
            this.puzzle = PuzzleFactory.createPuzzle(type, image, this.canvas);
            this.puzzle.init();
            this.puzzle.draw();
    
            // Initialize and start the timer
            this.timer = new Timer(
                this.totalTimePerPuzzle,
                (timeLeft) => this.updateTimeUI(timeLeft),
                () => this.handlePuzzleTimeout()
            );
            this.timer.start();
    
            // Handle puzzle completion
            this.puzzle.onComplete(() => this.handlePuzzleComplete());
        };
    }

    handlePuzzleComplete() {
        this.timer.stop();
        const scoreForThisPuzzle = this.timer.timeLeft * 10; // Example scoring logic
        this.totalScore += scoreForThisPuzzle;
        this.updateScoreUI();
        this.currentPuzzleIndex++;
        this.startNextPuzzle();
    }

    handlePuzzleTimeout() {
        console.log("Time's up!");
        this.currentPuzzleIndex++;
        this.startNextPuzzle();
    }

    updateTimeUI(timeLeft) {
        document.getElementById('timeLeft').innerText = timeLeft;
    }

    updateScoreUI() {
        document.getElementById('totalScore').innerText = this.totalScore;
    }

    endGame() {
        console.log("Game Over! Final Score: " + this.totalScore);
        alert("Game Over! Final Score: " + this.totalScore);
    }
}

// Usage
const canvas = document.getElementById('puzzleCanvas');
/*const puzzleSequence = [
    { type: 'sliding', imagePath: 'path/to/image1.jpg' },
    { type: 'classic', imagePath: 'path/to/image2.jpg' },
    { type: 'sliding', imagePath: 'path/to/image3.jpg' },
    { type: 'classic', imagePath: 'path/to/image4.jpg' },
    { type: 'sliding', imagePath: 'path/to/image5.jpg' },
    { type: 'classic', imagePath: 'path/to/image6.jpg' },
    { type: 'sliding', imagePath: 'path/to/image7.jpg' },
    { type: 'classic', imagePath: 'path/to/image8.jpg' },
    { type: 'sliding', imagePath: 'path/to/image9.jpg' },
    { type: 'classic', imagePath: 'path/to/image10.jpg' }
];*/
// TEST SINGLE PUZZLE - 'sliding', 'swapping', 'classic'
const puzzleSequence = [
    { type: 'swapping', imagePath: './assets/test_img.jpg' }
];
const totalTimePerPuzzle = 60; // 60 seconds for each puzzle
const gameManager = new GameManager(canvas, puzzleSequence, totalTimePerPuzzle);
gameManager.startNextPuzzle();
