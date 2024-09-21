const puzzleCanvas = document.getElementById('puzzleCanvas');
const piecesCanvas = document.getElementById('piecesCanvas');
const puzzleContext = puzzleCanvas.getContext('2d');
const piecesContext = piecesCanvas.getContext('2d');

const rows = 3;  // Adjust the number of rows for puzzle pieces
const cols = 3;  // Adjust the number of columns for puzzle pieces
const pieceWidth = 100; // Width of each puzzle piece
const pieceHeight = 100; // Height of each puzzle piece

let pieces = []; // Array to hold puzzle pieces
let puzzleBoard = Array(rows).fill().map(() => Array(cols).fill(null)); // 2D array to hold the puzzle state
let selectedPiece = null; // Currently selected piece
let img = new Image();

img.onload = function () {
    createPuzzlePieces();
    drawPuzzleBoard();
    drawPiecesBoard();
};
img.src = 'your-image-path.jpg'; // Replace with the path to your image

function createPuzzlePieces() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!(row === 2 && col === 2)) { // Exclude the bottom right corner for an 8-piece puzzle
                pieces.push({
                    row,
                    col,
                    x: col * pieceWidth,
                    y: row * pieceHeight,
                    width: pieceWidth,
                    height: pieceHeight
                });
            }
        }
    }

    // Randomize pieces positions on the pieces canvas
    pieces = pieces.sort(() => Math.random() - 0.5);
}

function drawPuzzleBoard() {
    puzzleContext.clearRect(0, 0, puzzleCanvas.width, puzzleCanvas.height);
    // Draw placed pieces on the puzzle canvas
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const piece = puzzleBoard[row][col];
            if (piece) {
                drawPiece(puzzleContext, piece, col * pieceWidth, row * pieceHeight);
            } else if (!(row === 2 && col === 2)) {
                // Draw placeholder for empty spaces except the bottom-right corner
                puzzleContext.strokeRect(col * pieceWidth, row * pieceHeight, pieceWidth, pieceHeight);
            }
        }
    }
}

function drawPiecesBoard() {
    piecesContext.clearRect(0, 0, piecesCanvas.width, piecesCanvas.height);
    pieces.forEach((piece, index) => {
        const x = (index % 2) * pieceWidth; // Arrange pieces in two columns on the right canvas
        const y = Math.floor(index / 2) * pieceHeight;
        drawPiece(piecesContext, piece, x, y);
    });
}

function drawPiece(context, piece, x, y) {
    context.drawImage(
        img,
        piece.x, piece.y, piece.width, piece.height,  // Source (image) coordinates
        x, y, piece.width, piece.height               // Destination (canvas) coordinates
    );
    context.strokeRect(x, y, piece.width, piece.height);
}

// Handle clicks on the puzzle canvas to place pieces
puzzleCanvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const col = Math.floor(x / pieceWidth);
    const row = Math.floor(y / pieceHeight);

    if (selectedPiece && !puzzleBoard[row][col] && !(row === 2 && col === 2)) { // Place piece if cell is empty and not the excluded spot
        puzzleBoard[row][col] = selectedPiece;
        pieces = pieces.filter(piece => piece !== selectedPiece); // Remove the piece from the pieces array
        selectedPiece = null;
        drawPuzzleBoard();
        drawPiecesBoard();

        if (isPuzzleSolved()) {
            setTimeout(() => alert('Puzzle Solved!'), 200);
        }
    }
});

// Handle clicks on the pieces canvas to select a piece
piecesCanvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const col = Math.floor(x / pieceWidth);
    const row = Math.floor(y / pieceHeight);
    const index = col + row * 2;

    if (pieces[index]) {
        selectedPiece = pieces[index];
        highlightSelectedPiece(index);
    }
});

function highlightSelectedPiece(index) {
    drawPiecesBoard(); // Redraw to remove previous highlight
    const piece = pieces[index];
    piecesContext.globalAlpha = 0.5;
    piecesContext.fillStyle = 'yellow';
    piecesContext.fillRect((index % 2) * pieceWidth, Math.floor(index / 2) * pieceHeight, pieceWidth, pieceHeight);
    piecesContext.globalAlpha = 1.0;
    drawPiece(piecesContext, piece, (index % 2) * pieceWidth, Math.floor(index / 2) * pieceHeight);
}

function isPuzzleSolved() {
    // Check if all pieces are in the correct position
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const piece = puzzleBoard[row][col];
            if (piece && (piece.row !== row || piece.col !== col)) {
                return false;
            }
        }
    }
    return true;
}
