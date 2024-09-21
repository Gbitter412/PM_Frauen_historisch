const canvas = document.getElementById('puzzleCanvas');
const context = canvas.getContext('2d');

const rows = 3;
const cols = 3;
const tileSize = canvas.width / cols;
let board = [];
let emptyTile = { row: rows - 1, col: cols - 1 };
let img = new Image();

img.onload = function () {
    initializeBoard();
    drawBoard();
};
img.src = 'your-image-path.jpg';  // Replace with your image path

function initializeBoard() {
    let index = 0;
    for (let row = 0; row < rows; row++) {
        board[row] = [];
        for (let col = 0; col < cols; col++) {
            board[row][col] = index;
            index++;
        }
    }
    board[emptyTile.row][emptyTile.col] = -1;  // -1 represents the empty tile
    shuffleBoard();
}

function shuffleBoard() {
    for (let i = 0; i < 1000; i++) {  // Perform a large number of random moves to shuffle
        let possibleMoves = getPossibleMoves();
        let randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        moveTile(randomMove.row, randomMove.col);
    }
}

function getPossibleMoves() {
    let moves = [];
    const { row, col } = emptyTile;
    if (row > 0) moves.push({ row: row - 1, col });  // Up
    if (row < rows - 1) moves.push({ row: row + 1, col });  // Down
    if (col > 0) moves.push({ row, col: col - 1 });  // Left
    if (col < cols - 1) moves.push({ row, col: col + 1 });  // Right
    return moves;
}

function moveTile(row, col) {
    if (Math.abs(row - emptyTile.row) + Math.abs(col - emptyTile.col) === 1) {
        board[emptyTile.row][emptyTile.col] = board[row][col];
        board[row][col] = -1;
        emptyTile = { row, col };
    }
}

function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] !== -1) {
                const sx = (board[row][col] % cols) * tileSize;
                const sy = Math.floor(board[row][col] / cols) * tileSize;
                context.drawImage(img, sx, sy, tileSize, tileSize, col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
    }
}

canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const col = Math.floor(x / tileSize);
    const row = Math.floor(y / tileSize);

    if (Math.abs(row - emptyTile.row) + Math.abs(col - emptyTile.col) === 1) {
        moveTile(row, col);
        drawBoard();

        if (isSolved()) {
            setTimeout(() => alert('Puzzle Solved!'), 200);
        }
    }
});

function isSolved() {
    let index = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] !== index) {
                return row === rows - 1 && col === cols - 1;
            }
            index++;
        }
    }
    return true;
}
