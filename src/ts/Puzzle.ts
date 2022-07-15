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
        this.initializeArrowKeyInputs();
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
            this.shuffle();
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
            }
        }
    }

    //EFFECTS: configure user arrow key inputs
    initializeArrowKeyInputs(): void {
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return;
            }

            switch (event.key) {
                case "ArrowDown":
                    puzzle.movePuzzle(Direction.Down);
                    break;
                case "ArrowUp":
                    puzzle.movePuzzle(Direction.Up);
                    break;
                case "ArrowLeft":
                    puzzle.movePuzzle(Direction.Left);
                    break;
                case "ArrowRight":
                    puzzle.movePuzzle(Direction.Right);
                    break;
                default:
                    return;
            }
          
            event.preventDefault();
        }, true);
    }

    //EFFECTS: shuffles the grid
    shuffle(): void {
        for (let i = 0; i < 500; ++i) {
            this.movePuzzle(Math.floor(Math.random() * 4));
            this.updatePuzzleStatusElement();
        }
    }

    //EFFECTS: moves grid in a given direction
    movePuzzle(dir: Direction): void {
        const movedTileLocation: Location = this.emptyLocation.getLocationInDirection(dir);
        if (!movedTileLocation.isValid()) return;
        this.grid.swap(this.emptyLocation, movedTileLocation);
        Object.assign(this.emptyLocation, movedTileLocation);
        this.updatePuzzleStatusElement();
    }
}

let puzzle = new Puzzle();

export { Puzzle }
