import { Grid } from './Grid.js';
import { Location } from './Location.js';
import { ValidMoves } from './ValidMoves.js';

class Puzzle {
    // COMMENTS: these are the member variables of Puzzle.
    private grid: Grid;
    private empty_loc: Location;

    // REQUIRES: nothing.
    constructor() {
        // TODO - verify that this works
        this.grid = new Grid;
        this.emptyLocation = new Location(3, 3);
    }

    //EFFECTS: moves grid in a given direction
    movePuzzle(dir: Direction): void {
        if (!ValidMoves.isMoveDirectionAtLocationValid(dir, this.emptyLocation) return;
        movedTileLocation: Location = emptyLocation.getLocationInDirection(dir);
        this.grid.swap(emptyLocation, movedTileLocation);
        Object.assign(this.emptyLocation, movedTileLocation);
    }
}

export { Puzzle }
