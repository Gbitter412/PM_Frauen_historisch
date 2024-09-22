import { SlidingPuzzle } from './SlidingPuzzle.js';
import { SwappingPuzzle } from './SwappingPuzzle.js';
import { ClassicPuzzle } from './ClassicPuzzle.js';

// Fabrikklasse zur Erstellung von Puzzles
export class PuzzleFactory {
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