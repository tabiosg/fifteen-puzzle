
import { Location } from './Location.js';

class Grid {
    // COMMENTS: these are the member variables of Grid.
    private tiles: Array<number>;
    readonly default_tiles: Array<number> = [
                                              1, 2, 3, 4,
                                              5, 6, 7, 8,
                                              9, 10, 11, 12,
                                              13, 14, 15, 0
                                            ];

    // REQUIRES: nothing.
    constructor() {
        // TODO - verify that this works
        this.tiles = Array.from(default_tiles);
    }

    //EFFECTS: returns whether grid is complete.
    isGridComplete(loc: Location): boolean {
        return this.tiles === this.default_tiles;
    }
    
    //EFFECTS: sets grid equal to another grid.
    set_grid(other: Grid): void {
        this.tiles = Array.from(other.tiles);
    }

    //REQUIRES: loc is a valid location.
    //EFFECTS: returns the tile number at the location.
    getTileAtLocation(loc: Location): number {
        return this.tiles[loc.getIndex()];
    }
    
    //EFFECTS: resets the grid to have tiles at default locations.
    reset(): void {
        this.tiles = Array.from(default_tiles);
    }
    
    //EFFECTS: shuffles the grid.
    shuffle(): void {
        // TODO - do eventually, don't just randomly shuffle unless you check if the grid is valid.
    }
    
    //REQUIRES: locations are adjacent.
    //EFFECTS: swaps the tiles of two adjacent locations.
    swap(loc1: Location, loc2: Location): void {
        index_1: number = loc1.getIndex();
        index_2: number = loc2.getIndex();
        [this.tiles[index_1] , this.tiles[index_2]] = [this.tiles[index_2] , this.tiles[index_1]];
    }
}

export { Grid }
