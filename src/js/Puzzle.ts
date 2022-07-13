import { Direction } from './Direction.js';
import { Grid } from './Grid.js';
import { Location } from './Location.js';
import { ValidMoves } from './ValidMoves.js';

class Puzzle {
    // COMMENTS: these are the member variables of Puzzle.
    private grid: Grid;
    private emptyLocation: Location;

    // REQUIRES: nothing.
    constructor() {
        // TODO - verify that this works
        this.grid = new Grid;
        this.emptyLocation = new Location(3, 3);
        this.initializeAllButtons();
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
        }

        let resetButton = document.getElementById("reset-button")!;
        resetButton.onclick = () => {
            this.grid.reset();
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
            }
        }
    }

    //EFFECTS: moves grid in a given direction
    movePuzzle(dir: Direction): void {
        if (!ValidMoves.isMoveDirectionAtLocationValid(dir, this.emptyLocation)) return;
        const movedTileLocation: Location = this.emptyLocation.getLocationInDirection(dir);
        this.grid.swap(this.emptyLocation, movedTileLocation);
        Object.assign(this.emptyLocation, movedTileLocation);
    }
}

export { Puzzle }
