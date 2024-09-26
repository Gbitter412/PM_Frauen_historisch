document.addEventListener("DOMContentLoaded", (event) => {
  const riddles = [
    {
      image: "../assets/img/cc_1.png",
      answer: "15",
      hint: "Es ist eine einfache Addition.",
    },
    {
      image: "../assets/img/cc_2.png",
      answer: "AdaAdaAda",
      hint: "In Python wird eine Zeichenkette mit der Multiplikation durch eine Zahl so oft wiederholt.",
    },
    {
      image: "../assets/img/cc_3.png",
      answer: "5 10",
      hint: "In Python kannst du Variablen in einer Zeile mithilfe von Tupel-Entpackung tauschen.",
    },
    {
      image: "../assets/img/cc_4.png",
      answer: "Even",
      hint: "Der %-Operator gibt den Rest zurück. Wenn x % 2 == 0, ist die Zahl gerade.",
    },
    {
      image: "../assets/img/cc_5.png",
      answer: "t",
      hint: "Zeichenketten sind in Python nullbasiert. Das erste Zeichen befindet sich an Index 0.",
    },
    {
      image: "../assets/img/cc_6.png",
      answer: "[1, 2, 3, 4]",
      hint: "In Python sind Listen veränderbar, und y verweist auf dieselbe Liste wie x. Klammern nicht vergessen!",
    },
    {
      image: "../assets/img/cc_7.png",
      answer: "2 4",
      hint: "Die Funktion range(1, 6) erzeugt Zahlen von 1 bis 5. Die if-Bedingung prüft auf gerade Zahlen.",
    },
    {
      image: "../assets/img/cc_8.png",
      answer: "5",
      hint: "Diese Funktion addiert zwei Zahlen und gibt das Ergebnis zurück.",
    },
    {
      image: "../assets/img/cc_9.png",
      answer: "[0, 5, 1, 2]",
      hint: "Die Methode .insert() fügt ein Element an einem bestimmten Index ein. Klammern nicht vergessen!",
    },
    {
      image: "../assets/img/cc_10.png",
      answer: "120",
      hint: "Dies ist die Fakultät von n. Multipliziere alle Zahlen von 1 bis n.",
    },
    {
      image: "../assets/img/cc_11.png",
      answer: "8",
      hint: "In Python ist ** der Operator für Potenzierung (x hoch y).",
    },
    {
      image: "../assets/img/cc_12.png",
      answer: "15",
      hint: "Die Funktion sum() addiert alle Elemente in einer Liste.",
    },
    {
      image: "../assets/img/cc_13.png",
      answer: "Hello World",
      hint: "In Python kannst du Zeichenketten mit dem +-Operator zusammenfügen.",
    },
    {
      image: "../assets/img/cc_14.png",
      answer: "[1, 1, 3, 4, 5]",
      hint: "Die Methode .sort() sortiert die Liste in aufsteigender Reihenfolge. Klammern nicht vergessen!",
    },
    {
      image: "../assets/img/cc_15.png",
      answer: "Hello, Alice",
      hint: "Die Funktion gibt eine Begrüßungsnachricht mit dem übergebenen Namen zurück.",
    },
    {
      image: "../assets/img/cc_16.png",
      answer: "3",
      hint: "Die Funktion len() gibt die Anzahl der Elemente in einer Liste zurück.",
    },
    {
      image: "../assets/img/cc_17.png",
      answer: "0 1 4",
      hint: "Die Schleife durchläuft Werte von 0 bis 2. i * i ist das Quadrat jeder Zahl.",
    },
    {
      image: "../assets/img/cc_18.png",
      answer: "[1, 3]",
      hint: "Die Methode .pop() entfernt das Element am angegebenen Index und gibt es zurück.",
    },
    {
      image: "../assets/img/cc_19.png",
      answer: "Not divisible by 3",
      hint: "Der Modulo-Operator % gibt den Rest einer Division zurück. Wenn x durch 3 teilbar ist, ist der Rest 0.",
    },
    {
      image: "../assets/img/cc_20.png",
      answer: "25",
      hint: "Die Funktion square() gibt das Quadrat der übergebenen Zahl zurück.",
    },
  ];
  let lastRiddles = []; //Array um die letzten 7 Rätsel zu speichern
  const maxHistory = 7;
  
  function loadRiddle() {
    let randomIndex;
    do{
      randomIndex = Math.floor(Math.random() * riddles.length);
    }while (lastRiddles.includes(randomIndex)); //stellt sicher, dass das Rätsel nicht in den letzten 7 war


    lastRiddles.push(randomIndex);
    if (lastRiddles.length > maxHistory){
      lastRiddles.shift(); //löscht den letzten Eintrag um die Größe konstant zu halten
    }


    const riddle = riddles[randomIndex];
    const canvas = document.getElementById("codeCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image(); // Neues Bild-Objekt

    // Bild auf das Canvas zeichnen, wenn es geladen wurde
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Setze die Bildquelle auf das aktuelle Riddle
    img.src = riddle.image;

    return riddle.answer;
  }

  function loadNextRiddle() {
    correctAnswer = loadRiddle();
    document.getElementById("userAnswer").value = ""; // Clear the input field
    document.getElementById("result").textContent = ""; // Clear the result message
    document.getElementById("hintBox").style.display = "none"; // Hide the hint box
    document.getElementById("hintText").textContent = ""; // Clear hint text
  }

  let correctAnswer = loadRiddle();

  window.checkAnswer = function () {
    // Make the function globally accessible
    const userInput = document.getElementById("userAnswer").value;
    const result = document.getElementById("result");
    if (userInput === correctAnswer) {
      result.textContent = "Richtig!";
      result.style.color = "green";
      setTimeout(() => {
        loadNextRiddle();
      }, 1500);
    } else {
      result.textContent = "Versuche es erneut!";
      result.style.color = "red";
    }
  };

  window.toggleHint = function () {
    // Make the function globally accessible
    const hintBox = document.getElementById("hintBox");
    const hintText = document.getElementById("hintText");

    // Box sichtbar machen oder verstecken
    if (hintBox.style.display === "none" || hintBox.style.display === "") {
      hintBox.style.display = "block";
      hintText.textContent = riddles.find(
        (r) => r.answer === correctAnswer
      ).hint;
    } else {
      hintBox.style.display = "none";
    }
  };
});
