const riddles = [
    { code: "print(2 + 2)", answer: "4", hint: "It's basic math!" },
    { code: "console.log('Hello, World!')", answer: "Hello, World!", hint: "Think about outputs!" },
    // Add more riddles here...
];

function loadRiddle() {
    const riddle = riddles[Math.floor(Math.random() * riddles.length)];
    document.getElementById("codeRiddle").textContent = riddle.code;
    return riddle.answer;
}

let correctAnswer = loadRiddle();

function checkAnswer() {
    const userInput = document.getElementById("userAnswer").value;
    const result = document.getElementById("result");
    if (userInput === correctAnswer) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Try again!";
    }
}

function toggleHint() {
    const hintBox = document.getElementById("hintBox");
    const hintText = document.getElementById("hintText");
    hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
    hintText.textContent = riddles.find(r => r.answer === correctAnswer).hint;
}