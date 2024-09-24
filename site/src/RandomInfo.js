async function loadJson() {
  try {
    const response = await fetch("data.json");                  //json einlesen
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Laden der JSON-Datei:", error);
  }
}

function getRandomInfo(data) {
  const entries = data.entries;
  const randomIndex = Math.floor(Math.random() * entries.length);  //random info holen
  return entries[randomIndex].info_homepage;
}

async function insertRandomInfo() {
  const data = await loadJson();
  if (data) {
    const randomInfo = getRandomInfo(data);
    const infoElement = document.getElementById("randomInfo");
    infoElement.textContent = randomInfo;
  }
}

window.onload = insertRandomInfo; //funktionsaufruf jedes mal beim laden der seite
