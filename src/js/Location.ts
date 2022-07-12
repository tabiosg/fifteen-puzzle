
import { Direction } from './Direction.js';

class Location {
    // COMMENTS: these are the member variables of Rank
    private row: number;
    private col: number;

    // REQUIRES: 0 <= row <= 3 and c <= col <= 3
    // EXAMPLES: row = 2, row = 3
    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    //EFFECTS: returns row of location
    get getRow(): number {
        return this.row;
    }

    //EFFECTS: returns col of location
    get getCol(): number {
        return this.col;
    }

    //REQUIRES: dir is a valid Direction and location in direction must be valid
    //EFFECTS: returns the location that is in the direction relative to the current location.
    getLocationInDirection(dir: Direction): Location {
        const rowDiffByLoc: Array<number> = [1, 0, -1, 0];
        const colDiffByLoc: Array<number> = [0, -1, 0, 1];
        rowAdj: number = row + rowDiffByLoc[move];
        colAdj: number = col + colDiffByLoc[move];
        assert(0 <= row_adj && rowAdj < 4)
        assert(0 <= col_adj && colAdj < 4)
        return new Location(rowAdj, colAdj)
    }
}

export { Location }
