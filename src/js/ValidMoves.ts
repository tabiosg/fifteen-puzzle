import { Direction } from './Direction.js';
import { Location } from './Location.js';

class ValidMoves {
    // COMMENTS: these are the member variables of ValidMoves.
    static valid_moves: Array<boolean>;

    // REQUIRES: nothing.
    constructor() {
        this.valid_moves = new Array<boolean>(16);
        this.valid_moves = [];

        for (let i: number = 0; i < 16; i++) {
            this.valid_moves[i] = [true, true, true, true];
            row: number = Math.floor(i/4);
            col: number = i % 4;
            if (row == 0) this.valid_moves[i][UP] = false;
            else if (row == 3) this.valid_moves[i][DOWN] = false;
            if (col == 0) this.valid_moves[i][LEFT] = false;
            else if (row == 3) this.valid_moves[i][RIGHT] = false;
        }
    }

    //EFFECTS: returns whether it is valid to move an empty tile at a location in a certain direction
    static isMoveDirectionAtLocationValid(dir: Direction, loc: Location): boolean {
        return valid_moves[loc.getIndex()][dir];
    }

}

export { ValidMoves }
