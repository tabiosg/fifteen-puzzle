"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidMoves = void 0;
class ValidMoves {
    // REQUIRES: nothing.
    constructor() {
        ValidMoves.validMoves = new Array(16);
        ValidMoves.validMoves = [];
        for (let i = 0; i < 16; i++) {
            ValidMoves.validMoves[i] = [true, true, true, true];
            const row = Math.floor(i / 4);
            const col = i % 4;
            if (row == 0)
                ValidMoves.validMoves[i][0 /* Direction.Up */] = false;
            else if (row == 3)
                ValidMoves.validMoves[i][1 /* Direction.Down */] = false;
            if (col == 0)
                ValidMoves.validMoves[i][2 /* Direction.Left */] = false;
            else if (col == 3)
                ValidMoves.validMoves[i][3 /* Direction.Right */] = false;
        }
    }
    //EFFECTS: returns whether it is valid to place a tile at a location in a certain direction
    static isMoveDirectionAtLocationValid(dir, loc) {
        return ValidMoves.validMoves[loc.getIndex()][dir];
    }
}
exports.ValidMoves = ValidMoves;
//# sourceMappingURL=ValidMoves.js.map