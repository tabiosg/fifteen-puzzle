
import { Location } from './Location.js';

class Grid {
    // COMMENTS: these are the member variables of Grid.
    readonly defaultTiles: Array<number>;
    private tiles: Array<number>;
    private locationElements: Array<HTMLElement>;

    // REQUIRES: nothing.
    constructor() {
        // TODO - verify that this works
        this.defaultTiles = [1, 2, 3, 4,
                             5, 6, 7, 8,
                             9, 10, 11, 12,
                             13, 14, 15, 0
                            ];
        this.tiles = Array.from(this.defaultTiles);
        this.locationElements = [
            document.getElementById("loc-0")!,
            document.getElementById("loc-1")!,
            document.getElementById("loc-2")!,
            document.getElementById("loc-3")!,
            document.getElementById("loc-4")!,
            document.getElementById("loc-5")!,
            document.getElementById("loc-6")!,
            document.getElementById("loc-7")!,
            document.getElementById("loc-8")!,
            document.getElementById("loc-9")!,
            document.getElementById("loc-10")!,
            document.getElementById("loc-11")!,
            document.getElementById("loc-12")!,
            document.getElementById("loc-13")!,
            document.getElementById("loc-14")!,
            document.getElementById("loc-15")!,
        ]
        this.updateAllGridElements();
    }

    //EFFECTS: returns whether grid is complete.
    isGridComplete(): boolean {
        for (let i = 0; i < this.tiles.length; ++i) {
            if (this.tiles[i] === this.defaultTiles[i]) continue;
            return false;
        }
        return true;
    }
    
    //EFFECTS: sets grid equal to another grid.
    setGrid(other: Grid): void {
        this.tiles = Array.from(other.tiles);
    }

    //REQUIRES: loc is a valid location.
    //EFFECTS: returns the tile number at the location.
    getTileAtLocation(loc: Location): number {
        return this.tiles[loc.getIndex()];
    }
    
    //EFFECTS: resets the grid to have tiles at default locations.
    reset(): void {
        this.tiles = Array.from(this.defaultTiles);
        this.updateAllGridElements();
    }

    //EFFECTS: updates the HTML elements to be consistent with the grid.
    updateAllGridElements(): void {
        for (let i = 0; i < this.tiles.length; ++i) {
            this.updateGridElementAtIndex(i);
        }
    }

    //EFFECTS: updates one grid element location to be consistent.
    updateGridElementAtIndex(index: number): void {
        const num: number = this.tiles[index];
        const str: string = num === 0 ? "*" : num.toString();
        this.locationElements[index].innerHTML = str;
    }
    
    //REQUIRES: locations are adjacent.
    //EFFECTS: swaps the tiles of two adjacent locations.
    swap(loc1: Location, loc2: Location): void {
        const index1: number = loc1.getIndex();
        const index2: number = loc2.getIndex();
        [this.tiles[index1] , this.tiles[index2]] = [this.tiles[index2] , this.tiles[index1]];
        this.updateGridElementAtIndex(index1);
        this.updateGridElementAtIndex(index2);
    }
}

export { Grid }
