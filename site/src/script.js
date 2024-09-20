const puzzleContainer = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-button");
const resetButton = document.getElementById("reset-button");
const imageUrl = "./assets/marie_c.jpg";
let originalOrder = [];
let shuffledOrder = [];
let selectedTiles = [];

function initializePuzzle() {
  for (let i = 0; i < 16; i++) {
    const piece = document.createElement("div");
    piece.classList.add("puzzle-piece");
    piece.style.backgroundImage = `url(${imageUrl})`;
    piece.style.backgroundPosition = `${(i % 4) * -100}px ${
      Math.floor(i / 4) * -100
    }px`;
    piece.dataset.index = i;
    originalOrder.push(i);
    shuffledOrder.push(i);
    puzzleContainer.appendChild(piece);

    piece.addEventListener("click", handlePieceClick);
  }
}

function swapPieces(index1, index2) {
  const temp = shuffledOrder[index1];
  shuffledOrder[index1] = shuffledOrder[index2];
  shuffledOrder[index2] = temp;

  updatePuzzle();
}

function updatePuzzle() {
  shuffledOrder.forEach((index, position) => {
    const piece = puzzleContainer.children[position];
    piece.style.backgroundPosition = `${(index % 4) * -100}px ${
      Math.floor(index / 4) * -100
    }px`;
  });

  if (shuffledOrder.toString() === originalOrder.toString()) {
    setTimeout(() => {
      alert("You solved the Puzzle!");
    }, 300);
  }
}

// Shuffle-Button
shuffleButton.addEventListener("click", shufflePuzzle);

// Reset-Button
resetButton.addEventListener("click", resetPuzzle);

function shufflePuzzle() {
  shuffledOrder = originalOrder.slice().sort(() => Math.random() - 0.5);
  updatePuzzle();
}

function resetPuzzle() {
  shuffledOrder = originalOrder.slice();
  updatePuzzle();
}

function handlePieceClick(e) {
  const clickedPiece = e.target;
  selectedTiles.push(clickedPiece);

  if (selectedTiles.length === 2) {
    const firstIndex = Array.prototype.indexOf.call(
      puzzleContainer.children,
      selectedTiles[0]
    );
    const secondIndex = Array.prototype.indexOf.call(
      puzzleContainer.children,
      selectedTiles[1]
    );
    swapPieces(firstIndex, secondIndex);
    selectedTiles = [];
  }
}

initializePuzzle();
