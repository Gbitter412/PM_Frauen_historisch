const puzzleCanvas = document.getElementById('puzzleCanvas');
const piecesCanvas = document.getElementById('piecesCanvas');
const puzzleContext = puzzleCanvas.getContext('2d');
const piecesContext = piecesCanvas.getContext('2d');

const rows = 3;  // Anzahl der Reihen für die Puzzleteile
const cols = 3;  // Anzahl der Spalten für die Puzzleteile
const pieceWidth = 100; // Breite jedes Puzzleteils
const pieceHeight = 100; // Höhe jedes Puzzleteils

let pieces = []; // Array zur Speicherung der Puzzleteile
let puzzleBoard = Array(rows).fill().map(() => Array(cols).fill(null)); // 2D-Array zur Speicherung des Puzzle-Zustands
let selectedPiece = null; // Aktuell ausgewähltes Puzzleteil
let img = new Image();

img.onload = function () {
    createPuzzlePieces();
    drawPuzzleBoard();
    drawPiecesBoard();
};
img.src = 'your-image-path.jpg'; // Pfad zum Bild ersetzen

// Erstellt die Puzzleteile und ordnet sie zufällig an
function createPuzzlePieces() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!(row === 2 && col === 2)) { // Untere rechte Ecke für ein 8-teiliges Puzzle ausschließen
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

    // Zufällige Anordnung der Puzzleteile auf der Teile-Leinwand
    pieces = pieces.sort(() => Math.random() - 0.5);
}

// Zeichnet das Puzzle-Board und die platzierten Teile
function drawPuzzleBoard() {
    puzzleContext.clearRect(0, 0, puzzleCanvas.width, puzzleCanvas.height);
    // Gelegte Teile auf der Puzzle-Leinwand zeichnen
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const piece = puzzleBoard[row][col];
            if (piece) {
                drawPiece(puzzleContext, piece, col * pieceWidth, row * pieceHeight);
            } else if (!(row === 2 && col === 2)) {
                // Platzhalter für leere Felder außer der unteren rechten Ecke zeichnen
                puzzleContext.strokeRect(col * pieceWidth, row * pieceHeight, pieceWidth, pieceHeight);
            }
        }
    }
}

// Zeichnet die Teile-Leinwand mit den verfügbaren Puzzleteilen
function drawPiecesBoard() {
    piecesContext.clearRect(0, 0, piecesCanvas.width, piecesCanvas.height);
    pieces.forEach((piece, index) => {
        const x = (index % 2) * pieceWidth; // Teile in zwei Spalten auf der rechten Leinwand anordnen
        const y = Math.floor(index / 2) * pieceHeight;
        drawPiece(piecesContext, piece, x, y);
    });
}

// Zeichnet ein einzelnes Puzzleteil auf der angegebenen Leinwand
function drawPiece(context, piece, x, y) {
    context.drawImage(
        img,
        piece.x, piece.y, piece.width, piece.height,  // Quellkoordinaten (Bild)
        x, y, piece.width, piece.height               // Zielkoordinaten (Leinwand)
    );
    context.strokeRect(x, y, piece.width, piece.height);
}

// Behandelt Klicks auf die Puzzle-Leinwand, um Teile zu platzieren
puzzleCanvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const col = Math.floor(x / pieceWidth);
    const row = Math.floor(y / pieceHeight);

    if (selectedPiece && !puzzleBoard[row][col] && !(row === 2 && col === 2)) { // Teil platzieren, wenn das Feld leer ist und nicht die ausgeschlossene Stelle
        puzzleBoard[row][col] = selectedPiece;
        pieces = pieces.filter(piece => piece !== selectedPiece); // Teil aus dem Array entfernen
        selectedPiece = null;
        drawPuzzleBoard();
        drawPiecesBoard();

        if (isPuzzleSolved()) {
            setTimeout(() => alert('Puzzle Solved!'), 200);
        }
    }
});

// Behandelt Klicks auf die Teile-Leinwand, um ein Teil auszuwählen
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

// Hebt das ausgewählte Puzzleteil hervor
function highlightSelectedPiece(index) {
    drawPiecesBoard(); // Neu zeichnen, um vorherige Hervorhebung zu entfernen
    const piece = pieces[index];
    piecesContext.globalAlpha = 0.5;
    piecesContext.fillStyle = 'yellow';
    piecesContext.fillRect((index % 2) * pieceWidth, Math.floor(index / 2) * pieceHeight, pieceWidth, pieceHeight);
    piecesContext.globalAlpha = 1.0;
    drawPiece(piecesContext, piece, (index % 2) * pieceWidth, Math.floor(index / 2) * pieceHeight);
}

// Überprüft, ob das Puzzle gelöst ist
function isPuzzleSolved() {
    // Überprüfen, ob alle Teile an der richtigen Position sind
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