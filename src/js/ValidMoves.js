"use strict";
exports.__esModule = true;
exports.ValidMoves = void 0;
var ValidMoves = /** @class */ (function () {
    // REQUIRES: nothing.
    function ValidMoves() {
        ValidMoves.validMoves = new Array(16);
        ValidMoves.validMoves = [];
        for (var i = 0; i < 16; i++) {
            ValidMoves.validMoves[i] = [true, true, true, true];
            var row = Math.floor(i / 4);
            var col = i % 4;
            if (row === 0)
                ValidMoves.validMoves[i][0 /* Direction.Up */] = false;
            else if (row === 3)
                ValidMoves.validMoves[i][1 /* Direction.Down */] = false;
            if (col === 0)
                ValidMoves.validMoves[i][2 /* Direction.Left */] = false;
            else if (col === 3)
                ValidMoves.validMoves[i][3 /* Direction.Right */] = false;
        }
    }
    //EFFECTS: returns whether it is valid to place a tile at a location in a certain direction
    ValidMoves.isMoveDirectionAtLocationValid = function (dir, loc) {
        return ValidMoves.validMoves[loc.getIndex()][dir];
    };
    return ValidMoves;
}());
exports.ValidMoves = ValidMoves;
