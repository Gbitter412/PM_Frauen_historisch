import { GameManager } from "./GameManager.js"; // Importiere die GameManager-Klasse, die das Spiel steuert

// Definiere die Bildpfade in der Reihenfolge von img1 bis img30
const imagePaths = [
  "../assets/img/1.jpg",
  "../assets/img/2.jpg",
  "../assets/img/3.jpg",
  "../assets/img/4.jpg",
  "../assets/img/5.jpg",
  "../assets/img/6.jpg",
  "../assets/img/7.jpg",
  "../assets/img/8.jpg",
  "../assets/img/9.jpg",
  "../assets/img/10.jpg",
  "../assets/img/11.jpg",
  "../assets/img/12.jpg",
  "../assets/img/13.jpg",
  "../assets/img/14.jpg",
  "../assets/img/15.jpg",
  "../assets/img/16.jpg",
  "../assets/img/17.jpg",
  "../assets/img/18.jpg",
  "../assets/img/19.jpg",
  "../assets/img/20.jpg",
  "../assets/img/21.jpg",
  "../assets/img/22.jpg",
  "../assets/img/23.jpg",
  "../assets/img/24.jpg",
  "../assets/img/25.jpg",
  "../assets/img/26.jpg",
  "../assets/img/27.jpg",
  "../assets/img/28.jpg",
  "../assets/img/29.jpg",
  "../assets/img/30.jpg",
];

// Funktion zur Generierung der Puzzlesequenz in der Reihenfolge
const puzzleSequence = imagePaths.map((imagePath) => {
  return { type: "swapping", imagePath: imagePath };
});

// Hole das Canvas-Element aus dem HTML-Dokument, in dem das Puzzle gezeichnet wird
const canvas = document.getElementById("puzzleCanvas");
// Hole zufällig generierten Bildindex
const imageIndex = sessionStorage.getItem("varImageIndex");
console.log("main.js: imageIndex", imageIndex);

// Erstelle eine Instanz des GameManager mit dem Canvas und der generierten Puzzle-Sequenz
const gameManager = new GameManager(canvas, puzzleSequence, imageIndex);
// Starte das erste Puzzle
gameManager.startNextPuzzle();