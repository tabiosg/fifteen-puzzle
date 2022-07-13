import { Location } from './Location.js'; 

class Reference {
    // COMMENTS: these are the member variables of Reference.
    private locations: Array<HTMLElement>;

    // REQUIRES: nothing.
    constructor() {
        this.locations = [
            document.getElementById("loc-0")!,
            document.getElementById("loc-1")!,
            document.getElementById("loc-2")!,
            document.getElementById("loc-3")!,
            document.getElementById("loc-4")!,
            document.getElementById("loc-5")!,
            document.getElementById("loc-6")!,
            document.getElementById("loc-0")!,
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
    }

    //EFFECTS: assigns a number to a location
    changeStringOfLocation(str: string, loc: Location): void {
        this.locations[loc.getIndex()].innerHTML = str;
    }
}

export { Reference }