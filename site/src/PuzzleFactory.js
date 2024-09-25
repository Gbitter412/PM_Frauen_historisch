import { SwappingPuzzle } from './SwappingPuzzle.js';  // Importiere die SwappingPuzzle-Klasse

// Fabrikklasse zur Erstellung von Puzzles
export class PuzzleFactory {
    // Statische Methode zur Erstellung eines Puzzles basierend auf dem Typ
    static createPuzzle(type, image, canvas, options = {}) {
        switch (type) {
            case 'swapping':
                // Erstelle ein SwappingPuzzle und übergebe das Bild, das Canvas und die Optionen (z.B. Zeilen und Spalten)
                return new SwappingPuzzle(image, canvas, options.rows, options.cols);
            default:
                // Werfe einen Fehler, wenn ein unbekannter Puzzle-Typ angefordert wird
                throw new Error('Unknown puzzle type');
        }
    }
}