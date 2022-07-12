import { Direction } from './Direction.js';
import { Location } from './Location.js';

class ValidMoves {
    // COMMENTS: these are the member variables of ValidMoves.
    static validMoves: Array<Array<boolean>>;

    // REQUIRES: nothing.
    constructor() {
        ValidMoves.validMoves = new Array<Array<boolean>>(16);
        ValidMoves.validMoves = [];

        for (let i: number = 0; i < 16; i++) {
            ValidMoves.validMoves[i] = [true, true, true, true];
            const row: number = Math.floor(i/4);
            const col: number = i % 4;
            if (row == 0) ValidMoves.validMoves[i][Direction.Up] = false;
            else if (row == 3) ValidMoves.validMoves[i][Direction.Down] = false;
            if (col == 0) ValidMoves.validMoves[i][Direction.Left] = false;
            else if (row == 3) ValidMoves.validMoves[i][Direction.Right] = false;
        }
    }

    //EFFECTS: returns whether it is valid to move an empty tile at a location in a certain direction
    static isMoveDirectionAtLocationValid(dir: Direction, loc: Location): boolean {
        return ValidMoves.validMoves[loc.getIndex()][dir];
    }

}

export { ValidMoves }
