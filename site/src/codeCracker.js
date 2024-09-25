document.addEventListener('DOMContentLoaded', (event) => {
    const riddles = [
        { code: "x = 10\ny = 5\nprint(x + y)", answer: "15", hint: "Es ist eine einfache Addition." },
        { code: "name=Ada\nprint(name * 3)", answer: "AdaAdaAda", hint: "In Python wird eine Zeichenkette mit der Multiplikation durch eine Zahl so oft wiederholt." },
        { code: "a = 10\nb = 5\na, b = b, a\n print(a, b)", answer: "5 10", hint:"In Python kannst du Variablen in einer Zeile mithilfe von Tupel-Entpackung tauschen."},
        { code: "x = 4\nif x % 2 == 0:\n\tprint(\"Even\")\nelse:\n\tprint(\"Odd\") ", answer: "Even", hint:"Der %-Operator gibt den Rest zurück. Wenn x % 2 == 0, ist die Zahl gerade."},
        { code: "s = \"Python\"\nprint(s[2])", answer: "t", hint:"Zeichenketten sind in Python nullbasiert. Das erste Zeichen befindet sich an Index 0."},
        { code: "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)", answer: "[1, 2, 3, 4]", hint:"In Python sind Listen veränderbar, und y verweist auf dieselbe Liste wie x. Klammern nicht vergessen!"},
        { code: "for i in range(1, 6):\n\tif i % 2 == 0:\n\t\tprint(i, end=\" \")", answer: "2 4", hint:"Die Funktion range(1, 6) erzeugt Zahlen von 1 bis 5. Die if-Bedingung prüft auf gerade Zahlen."},
        { code: "def add(a, b):\n\treturn a + b\nprint(add(2, 3))", answer: "5", hint:"Diese Funktion addiert zwei Zahlen und gibt das Ergebnis zurück."},
        { code: "x = [0, 1, 2]\nx.insert(1, 5)\nprint(x)", answer: "[0, 5, 1, 2]", hint:"Die Methode .insert() fügt ein Element an einem bestimmten Index ein. Klammern nicht vergessen!"},
        { code: "n = 5\nfactorial = 1\nfor i in range(1, n+1):\n\tfactorial *= i \nprint(factorial)", answer: "120", hint:"Dies ist die Fakultät von n. Multipliziere alle Zahlen von 1 bis n."},
    ];
    let currentRiddleIndex = 0;
    function loadRiddle() {
        const riddle = riddles[currentRiddleIndex];
        document.getElementById("codeRiddle").textContent = riddle.code;
        return riddle.answer;
    }
    function loadNextRiddle(){
        currentRiddleIndex = (currentRiddleIndex +1)% riddles.length;
        correctAnswer = loadRiddle();
        document.getElementById("userAnswer").value = ""; // Clear the input field
        document.getElementById("result").textContent = ""; // Clear the result message
        document.getElementById("hintBox").style.display = "none"; // Hide the hint box
        document.getElementById("hintText").textContent = ""; // Clear hint text
    }

    let correctAnswer = loadRiddle();

    window.checkAnswer = function() {  // Make the function globally accessible
        const userInput = document.getElementById("userAnswer").value;
        const result = document.getElementById("result");
        if (userInput === correctAnswer) {
            result.textContent = "Richtig!";
            setTimeout(()=>{
                loadNextRiddle();
            },1500);
        } else {
            result.textContent = "Versuche es erneut!";
        }
    };

    window.toggleHint = function() {  // Make the function globally accessible
        const hintBox = document.getElementById("hintBox");
        const hintText = document.getElementById("hintText");

        // Box sichtbar machen oder verstecken
        if (hintBox.style.display === "none" || hintBox.style.display === "") {
            hintBox.style.display = "block";
            hintText.textContent = riddles.find(r => r.answer === correctAnswer).hint;
        } else {
            hintBox.style.display = "none";
        }
    };
});
