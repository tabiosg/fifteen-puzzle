
import { Direction } from './Direction.js';

class Location {
    // COMMENTS: these are the member variables of Location.
    private row: number;
    private col: number;

    // REQUIRES: 0 <= row <= 3 and c <= col <= 3.
    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    //EFFECTS: returns row of location.
    getRow(): number {
        return this.row;
    }

    //EFFECTS: returns col of location.
    getCol(): number {
        return this.col;
    }

    //EFFECTS: returns the index of the location in a grid.
    getIndex(): number {
        return this.row * 4 + this.col;
    }

    //EFFECTS: returns whether location is valid or not
    isValid(): boolean {
        return 0 <= this.row && this.row < 4 && 0 <= this.col && this.col < 4;
    }
    
    //REQUIRES: dir is a valid Direction and location in direction must be valid.
    //EFFECTS: returns the location that is in the direction relative to the current location.
    getLocationInDirection(dir: Direction): Location {
        const rowDiffByLoc: Array<number> = [1, 0, -1, 0];
        const colDiffByLoc: Array<number> = [0, -1, 0, 1];
        const rowAdj: number = this.row + rowDiffByLoc[dir];
        const colAdj: number = this.col + colDiffByLoc[dir];
        return new Location(rowAdj, colAdj)
    }
}

export { Location }
