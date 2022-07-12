
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
    get_location_in_direction(Direction: dir): Location {
        const row_diff_by_loc: Array<number> = [1, 0, -1, 0];
        const col_diff_by_loc: Array<number> = [0, -1, 0, 1];
        row_adj: number = row + row_diff_by_loc[move];
        col_adj: number = col + col_diff_by_loc[move];
        assert(0 <= row_adj && row_adj < 4)
        assert(0 <= col_adj && col_adj < 4)
        return new Location(row_adj, col_adj)
    }
}
