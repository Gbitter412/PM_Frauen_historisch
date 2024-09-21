const canvas = document.getElementById('puzzleCanvas');
const context = canvas.getContext('2d');

const rows = 4;
const cols = 4;
const tileSize = canvas.width / cols;
let board = [];
let selectedTiles = [];
let img = new Image();

img.onload = function () {
    initializeBoard();
    drawBoard();
};
img.src = 'your-image-path.jpg'; // Replace with your image path

function initializeBoard() {
    let indices = Array.from(Array(rows * cols).keys());
    board = Array.from({ length: rows }, () => Array(cols));

    // Randomly scramble the tiles
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const randomIndex = Math.floor(Math.random() * indices.length);
            board[row][col] = indices.splice(randomIndex, 1)[0];
        }
    }
}

function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const index = board[row][col];
            const sx = (index % cols) * tileSize;
            const sy = Math.floor(index / cols) * tileSize;
            
            // Highlight selected tiles
            if (selectedTiles.some(tile => tile.row === row && tile.col === col)) {
                context.globalAlpha = 0.6;
                context.fillStyle = 'yellow';
                context.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
                context.globalAlpha = 1.0;
            }

            context.drawImage(img, sx, sy, tileSize, tileSize, col * tileSize, row * tileSize, tileSize, tileSize);
        }
    }
}

canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const col = Math.floor(x / tileSize);
    const row = Math.floor(y / tileSize);
    
    // Select or swap tiles based on click
    handleTileSelection(row, col);
});

function handleTileSelection(row, col) {
    if (selectedTiles.length < 2) {
        // Check if the tile is already selected
        const isAlreadySelected = selectedTiles.some(tile => tile.row === row && tile.col === col);
        
        if (!isAlreadySelected) {
            selectedTiles.push({ row, col });
            drawBoard();

            // If two tiles are selected, swap them
            if (selectedTiles.length === 2) {
                swapTiles(selectedTiles[0], selectedTiles[1]);
                selectedTiles = [];
                drawBoard();

                if (isSolved()) {
                    setTimeout(() => alert('Puzzle Solved!'), 200);
                }
            }
        }
    }
}

function swapTiles(tile1, tile2) {
    const temp = board[tile1.row][tile1.col];
    board[tile1.row][tile1.col] = board[tile2.row][tile2.col];
    board[tile2.row][tile2.col] = temp;
}

function isSolved() {
    let index = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] !== index) {
                return false;
            }
            index++;
        }
    }
    return true;
}
