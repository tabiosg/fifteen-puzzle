"use strict";
exports.__esModule = true;
exports.Puzzle = void 0;
var Grid_js_1 = require("./Grid.js");
var Location_js_1 = require("./Location.js");
var Puzzle = /** @class */ (function () {
    // REQUIRES: nothing.
    function Puzzle() {
        // TODO - verify that this works
        this.grid = new Grid_js_1.Grid;
        this.emptyLocation = new Location_js_1.Location(3, 3);
        this.initializeAllButtons();
        this.puzzleStatusElement = document.getElementById("puzzle-status");
    }
    //EFFECTS: updates puzzle status based on grid
    Puzzle.prototype.updatePuzzleStatusElement = function () {
        if (this.grid.isGridComplete()) {
            this.puzzleStatusElement.innerHTML = "Completed";
            return;
        }
        this.puzzleStatusElement.innerHTML = "Not Completed";
    };
    //EFFECTS: initialize buttons
    Puzzle.prototype.initializeAllButtons = function () {
        this.initializePuzzleMenuButtons();
        this.initializeDirectionMenuButtons();
    };
    //EFFECTS: initialize puzzle menu buttons
    Puzzle.prototype.initializePuzzleMenuButtons = function () {
        var _this = this;
        var shuffleButton = document.getElementById("shuffle-button");
        shuffleButton.onclick = function () {
            _this.grid.shuffle();
            _this.updatePuzzleStatusElement();
        };
        var resetButton = document.getElementById("reset-button");
        resetButton.onclick = function () {
            _this.grid.reset();
            _this.updatePuzzleStatusElement();
        };
    };
    //EFFECTS: initialize direction menu buttons
    Puzzle.prototype.initializeDirectionMenuButtons = function () {
        var _this = this;
        var directionMenuButtons = [
            document.getElementById("up-button"),
            document.getElementById("right-button"),
            document.getElementById("down-button"),
            document.getElementById("left-button"),
        ];
        var _loop_1 = function (i) {
            directionMenuButtons[i].onclick = function () {
                _this.movePuzzle(i);
                _this.updatePuzzleStatusElement();
            };
        };
        for (var i = 0; i < directionMenuButtons.length; ++i) {
            _loop_1(i);
        }
    };
    //EFFECTS: moves grid in a given direction
    Puzzle.prototype.movePuzzle = function (dir) {
        var movedTileLocation = this.emptyLocation.getLocationInDirection(dir);
        if (!movedTileLocation.isValid())
            return;
        this.grid.swap(this.emptyLocation, movedTileLocation);
        Object.assign(this.emptyLocation, movedTileLocation);
    };
    return Puzzle;
}());
exports.Puzzle = Puzzle;
var puzzle = new Puzzle();
