"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puzzle = void 0;
const Grid_js_1 = require("./Grid.js");
const Location_js_1 = require("./Location.js");
const ValidMoves_js_1 = require("./ValidMoves.js");
class Puzzle {
    // REQUIRES: nothing.
    constructor() {
        // TODO - verify that this works
        this.grid = new Grid_js_1.Grid;
        this.emptyLocation = new Location_js_1.Location(3, 3);
        this.initializeAllButtons();
        this.puzzleStatusElement = document.getElementById("puzzle-status");
    }
    //EFFECTS: updates puzzle status based on grid
    updatePuzzleStatusElement() {
        if (this.grid.isGridComplete()) {
            this.puzzleStatusElement.innerHTML = "Completed";
            return;
        }
        this.puzzleStatusElement.innerHTML = "Not Completed";
    }
    //EFFECTS: initialize buttons
    initializeAllButtons() {
        this.initializePuzzleMenuButtons();
        this.initializeDirectionMenuButtons();
    }
    //EFFECTS: initialize puzzle menu buttons
    initializePuzzleMenuButtons() {
        let shuffleButton = document.getElementById("shuffle-button");
        shuffleButton.onclick = () => {
            this.grid.shuffle();
            this.updatePuzzleStatusElement();
        };
        let resetButton = document.getElementById("reset-button");
        resetButton.onclick = () => {
            this.grid.reset();
            this.updatePuzzleStatusElement();
        };
    }
    //EFFECTS: initialize direction menu buttons
    initializeDirectionMenuButtons() {
        let directionMenuButtons = [
            document.getElementById("up-button"),
            document.getElementById("right-button"),
            document.getElementById("down-button"),
            document.getElementById("left-button"),
        ];
        for (let i = 0; i < directionMenuButtons.length; ++i) {
            directionMenuButtons[i].onclick = () => {
                this.movePuzzle(i);
                this.updatePuzzleStatusElement();
            };
        }
    }
    //EFFECTS: moves grid in a given direction
    movePuzzle(dir) {
        const movedTileLocation = this.emptyLocation.getLocationInDirection(dir);
        if (!ValidMoves_js_1.ValidMoves.isMoveDirectionAtLocationValid(dir, movedTileLocation))
            return;
        this.grid.swap(this.emptyLocation, movedTileLocation);
        Object.assign(this.emptyLocation, movedTileLocation);
    }
}
exports.Puzzle = Puzzle;
//# sourceMappingURL=Puzzle.js.map