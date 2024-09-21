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
    // Implement the sliding puzzle specific logic
    init() {
        // Initialize sliding puzzle
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

class SwappingPuzzle extends Puzzle {
    // Implement the swapping puzzle specific logic
    init() {
        // Initialize swapping puzzle
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
const puzzleSequence = [
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
];
const totalTimePerPuzzle = 60; // 60 seconds for each puzzle
const gameManager = new GameManager(canvas, puzzleSequence, totalTimePerPuzzle);
gameManager.startNextPuzzle();
