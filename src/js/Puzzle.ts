import { Direction } from './Direction.js';
import { Grid } from './Grid.js';
import { Location } from './Location.js';
import { ValidMoves } from './ValidMoves.js';

class Puzzle {
    // COMMENTS: these are the member variables of Puzzle.
    private grid: Grid;
    private emptyLocation: Location;
    private puzzleStatusElement: HTMLElement;

    // REQUIRES: nothing.
    constructor() {
        // TODO - verify that this works
        this.grid = new Grid;
        this.emptyLocation = new Location(3, 3);
        this.initializeAllButtons();
        this.puzzleStatusElement = document.getElementById("puzzle-status")!;
    }

    //EFFECTS: updates puzzle status based on grid
    updatePuzzleStatusElement(): void {
        if (this.grid.isGridComplete()) {
            this.puzzleStatusElement.innerHTML = "Completed";
            return;
        }
        this.puzzleStatusElement.innerHTML = "Not Completed";
    }

    //EFFECTS: initialize buttons
    initializeAllButtons(): void {
        this.initializePuzzleMenuButtons();
        this.initializeDirectionMenuButtons();
    }

    //EFFECTS: initialize puzzle menu buttons
    initializePuzzleMenuButtons(): void {
        let shuffleButton = document.getElementById("shuffle-button")!;
        shuffleButton.onclick = () => {
            this.grid.shuffle();
            this.updatePuzzleStatusElement();
        }

        let resetButton = document.getElementById("reset-button")!;
        resetButton.onclick = () => {
            this.grid.reset();
            this.updatePuzzleStatusElement();
        }
    }

    //EFFECTS: initialize direction menu buttons
    initializeDirectionMenuButtons(): void {
        let directionMenuButtons = [
            document.getElementById("up-button")!,
            document.getElementById("right-button")!,
            document.getElementById("down-button")!,
            document.getElementById("left-button")!,
        ]
        for (let i = 0; i < directionMenuButtons.length; ++i) {
            directionMenuButtons[i].onclick = () => {
                this.movePuzzle(i);
                this.updatePuzzleStatusElement();
            }
        }
    }

    //EFFECTS: moves grid in a given direction
    movePuzzle(dir: Direction): void {
        const movedTileLocation: Location = this.emptyLocation.getLocationInDirection(dir);
        if (!ValidMoves.isMoveDirectionAtLocationValid(dir, movedTileLocation)) return;
        this.grid.swap(this.emptyLocation, movedTileLocation);
        Object.assign(this.emptyLocation, movedTileLocation);
    }
}

export { Puzzle }
