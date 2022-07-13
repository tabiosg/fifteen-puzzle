"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
class Location {
    // REQUIRES: 0 <= row <= 3 and c <= col <= 3.
    constructor(row, col) {
        assert(0 <= row && row < 4);
        assert(0 <= col && col < 4);
        this.row = row;
        this.col = col;
    }
    //EFFECTS: returns row of location.
    get getRow() {
        return this.row;
    }
    //EFFECTS: returns col of location.
    get getCol() {
        return this.col;
    }
    //EFFECTS: returns the index of the location in a grid.
    getIndex() {
        return this.row * 4 + this.col;
    }
    //REQUIRES: dir is a valid Direction and location in direction must be valid.
    //EFFECTS: returns the location that is in the direction relative to the current location.
    getLocationInDirection(dir) {
        const rowDiffByLoc = [1, 0, -1, 0];
        const colDiffByLoc = [0, -1, 0, 1];
        const rowAdj = this.row + rowDiffByLoc[dir];
        const colAdj = this.col + colDiffByLoc[dir];
        assert(0 <= rowAdj && rowAdj < 4);
        assert(0 <= colAdj && colAdj < 4);
        return new Location(rowAdj, colAdj);
    }
}
exports.Location = Location;
//# sourceMappingURL=Location.js.map