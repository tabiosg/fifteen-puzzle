"use strict";
exports.__esModule = true;
exports.Location = void 0;
var Location = /** @class */ (function () {
    // REQUIRES: 0 <= row <= 3 and c <= col <= 3.
    function Location(row, col) {
        this.row = row;
        this.col = col;
    }
    //EFFECTS: returns row of location.
    Location.prototype.getRow = function () {
        return this.row;
    };
    //EFFECTS: returns col of location.
    Location.prototype.getCol = function () {
        return this.col;
    };
    //EFFECTS: returns the index of the location in a grid.
    Location.prototype.getIndex = function () {
        return this.row * 4 + this.col;
    };
    //EFFECTS: returns whether location is valid or not
    Location.prototype.isValid = function () {
        return 0 <= this.row && this.row < 4 && 0 <= this.col && this.col < 4;
    };
    //REQUIRES: dir is a valid Direction and location in direction must be valid.
    //EFFECTS: returns the location that is in the direction relative to the current location.
    Location.prototype.getLocationInDirection = function (dir) {
        var rowDiffByLoc = [1, 0, -1, 0];
        var colDiffByLoc = [0, -1, 0, 1];
        var rowAdj = this.row + rowDiffByLoc[dir];
        var colAdj = this.col + colDiffByLoc[dir];
        return new Location(rowAdj, colAdj);
    };
    return Location;
}());
exports.Location = Location;
