
import { Direction } from './Direction.js';

declare function assert(value: unknown): asserts value;

class Location {
    // COMMENTS: these are the member variables of Location.
    private row: number;
    private col: number;

    // REQUIRES: 0 <= row <= 3 and c <= col <= 3.
    constructor(row: number, col: number) {
        assert(0 <= row && row < 4)
        assert(0 <= col && col < 4)
        this.row = row;
        this.col = col;
    }

    //EFFECTS: returns row of location.
    get getRow(): number {
        return this.row;
    }

    //EFFECTS: returns col of location.
    get getCol(): number {
        return this.col;
    }

    //EFFECTS: returns the index of the location in a grid.
    getIndex(): number {
        return this.row * 4 + this.col
    }
    
    //REQUIRES: dir is a valid Direction and location in direction must be valid.
    //EFFECTS: returns the location that is in the direction relative to the current location.
    getLocationInDirection(dir: Direction): Location {
        const rowDiffByLoc: Array<number> = [1, 0, -1, 0];
        const colDiffByLoc: Array<number> = [0, -1, 0, 1];
        const rowAdj: number = this.row + rowDiffByLoc[dir];
        const colAdj: number = this.col + colDiffByLoc[dir];
        assert(0 <= rowAdj && rowAdj < 4)
        assert(0 <= colAdj && colAdj < 4)
        return new Location(rowAdj, colAdj)
    }
}

export { Location }
