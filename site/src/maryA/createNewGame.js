import { createExcavationSite, createTilesArray, clearExcavationSite } from './excavationSiteFactory.js';
import { initGauge, resetGauge } from './gauge.js';

let canvas = null;
let excavationTiles = null;

function setSceneForNewGame(scene) {
    canvas = scene;
    createFirstGame();
}

function createFirstGame() {
    // Create the game
    excavationTiles = createTilesArray();
    createExcavationSite(excavationTiles, canvas);
    initGauge(canvas);
}

function createNewGame() {
    clearExcavationSite(canvas);

    // Create the game
    excavationTiles = createTilesArray();
    createExcavationSite(excavationTiles, canvas);  // Keep track of new tiles
    resetGauge();
}

export { setSceneForNewGame, createNewGame, excavationTiles };
