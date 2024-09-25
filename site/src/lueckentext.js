function generateTextWithBlanks(text, correctAnswers) {
    const regex = /BLANK/g; // regex to find flags
    let lastIndex = 0;
    const result = [];
    const blankSize = 7;
    let match;
    let answerIndex = 0;
  
    // search for matches and set dropzones
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      // write everything between lastIndex and match into result
      result.push(text.substring(lastIndex, start));
      // add dropzone with index to determine if solved
      result.push(
        `<span class="drop-zone" data-correct-answer="${
          correctAnswers[answerIndex]
        }">${"_".repeat(blankSize)}</span>`
      );
      lastIndex = regex.lastIndex;
      answerIndex++;
    }
  
    result.push(text.substring(lastIndex)); // add remaining text
    return result.join("");
  }
  
  // ATTENTION!! correctAnswers need to be ordered in JSON after their order in sentence
  function createClickableWords(correctAnswers, blanks) {
    const wordsContainer = document.getElementById("wordsContainer"); // contains our buttons
  
    // run over correctAnswers and create button for each
    correctAnswers.forEach((word, index) => {
      const wordElement = document.createElement("button");
      wordElement.className = "clickable-word"; // gets style from css class
      wordElement.textContent = word;
  
      // event listener for user feedback
      wordElement.addEventListener("click", () => {
        // on click execute below
        const dropZones = document.querySelectorAll(".drop-zone"); // select all dropzones
        dropZones[index].textContent = word; // drop word into correspondent dropzones
        dropZones[index].classList.add("glow-green"); // give glow effect
        setTimeout(() => {
          // for 1000ms
          dropZones[index].classList.remove("glow-green");
        }, 500);
  
        if (isPuzzleSolved()) {
          // Entfernt den location.reload Aufruf, sodass nichts passiert
        }
  
        wordsContainer.removeChild(wordElement); // remove word from word container
      });
  
      wordsContainer.appendChild(wordElement); // add word to word container
    });
  
    // run over correctAnswers and create button for each
    blanks.forEach((word, index) => {
      const wordElement = document.createElement("button");
      wordElement.className = "clickable-word";
      wordElement.textContent = word;
  
      // event listener for user feedback
      wordElement.addEventListener("click", () => {
        wordElement.classList.add("glow-red");
        setTimeout(() => {
          wordElement.classList.remove("glow-red");
        }, 500);
      });
  
      wordsContainer.appendChild(wordElement);
    });
  
    // shuffle word container
    const words = Array.from(wordsContainer.children);
    const shuffled = shuffleArray(words);
    wordsContainer.innerHTML = "";
    shuffled.forEach((word) => wordsContainer.appendChild(word));
  }
  
  function isPuzzleSolved() {
    // get all dropzones and check if solved
    const dropZones = document.querySelectorAll(".drop-zone");
    for (const dropZone of dropZones) {
      const correctAnswer = dropZone.getAttribute("data-correct-answer");
      if (dropZone.textContent.trim() !== correctAnswer) {
        return false;
      }
    }
    return true;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // dreist von caner gestohlen
  async function loadJson() {
    try {
      const response = await fetch("../textdata.json"); //json einlesen
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fehler beim Laden der JSON-Datei:", error);
    }
  }
  
  async function getRandomEntry() {
    const data = await loadJson();
    const entries = data.entries;
    const randomIndex = sessionStorage.getItem("varImageIndex");
    return entries[randomIndex];
  }
  
  async function initialize() {
    const entry = await getRandomEntry();
    const generatedText = generateTextWithBlanks(
      entry.Text,
      entry.correctAnswers
    );
    document.getElementById("textContainer").innerHTML = generatedText;
    createClickableWords(entry.correctAnswers, entry.blanks);
  }
  
  initialize();  