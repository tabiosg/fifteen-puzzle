
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

    //REQUIRES: dir is a valid Direction
    //EFFECTS: Returns the location that is in the direction relative to the current location.
    //         Note that this location may be invalid.
    get_location_in_direction(Direction: dir): Location {
        row_diff_by_loc = [1, 0, -1, 0]
        row_diff_by_loc = [0, -1, 0, 1]
        return new Location(
            row + row_diff_by_loc[move],
            col + row_diff_by_loc[move]
        )
    }
}
