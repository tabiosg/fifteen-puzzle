# Fifteen Puzzle

The fifteen puzzle is a sliding puzzle in which the player has to slide square tiles in a four by four grid into a certain configuration.
This project will demonstrate a simple human-friendly algorithm to solving any solvable fifteen puzzle.

---

## Simple Algorithm

The simple algorithm is NOT an optimal algorithm. Instead, it is a very simple algorithm that I made a YouTube video about in March 25, 2012 when I was nine years old. Because of how simple it is, this project will demonstrate the algorithm and also will give insight to its time complexity (rather, the maximum amount of single-tile moves needed).

The way how it works is the following (Tiles indexed by 1, locations indexed by 1):

1. Start with completing the top row. Place tile 1 in location 1, tile 2 in location 2, and tile 4 in location 3. Put tile 3 in location 7. Put tile 4 in location 4, and put tile 3 in location 3. When getting tile 4 into location 3, be wary of the location of tile 3 (try to put it around two tiles away) or else it may be difficult to place it in location 7.
2. Deal with completing the second row. Place tile 5 in location 5, tile 6 in location 6, and tile 8 in location 7. Put tile 7 in location 11. Put tile 8 in location 8, and put tile 7 in location 7. When getting tile 8 into location 7, be wary of the location of tile 7 (try to put it around two tiles away) or else it may be difficult to place it in location 11.
3. Deal with completing the third row. Place tile 9 in location 9, tile 10 in location 10, and tile 12 in location 11. Put tile 11 in location 15. Put tile 12 in location 12, and put tile 11 in location 11. When getting tile 12 into location 11, be wary of the location of tile 11 (try to put it around two tiles away) or else it may be difficult to place it in location 15.
4. If you're lucky, the last row will be in order (13, 14, 15). Otherwise, the steps will depend on our configuration. Our thought process is to remove a tile from the last row by placing it into a temporary storage area (the third row) and then place it back into last row in the desired location. This thought process of removing a tile from the last row and reintroducing it back into the last row in a new location is the same for all step 4 possibilities.

---

## Step 4 Possibilities

Our step 4 will depend on what we have at the last row. Here is a table of what we need to depending on each last row configuration.

- 13, 14, 15 &rarr; Finished
- 13, 15, 14 &rarr; Move middle to back
- 14, 13, 15 &rarr; Move front to middle
- 14, 15, 13 &rarr; Move back to front
- 15, 13, 14 &rarr; Move front to back
- 15, 14, 13 &rarr; Move middle to back to get (15, 13, 14) &rarr; Move front to back

There are multiple two-step ways for the (15, 14, 13) configuration and it all comes down to preference.

---

## Last Row Example

Imagine we start with (15, 13, 14). Here, we want to move the front tile (the tile 15) to the back so the new order is (13, 14, 15).

1. Make a space in the third row to prepare the temporary storage area. Do this by moving the entire bottom row to the right (whatever was in location 13 14 15 to location 14 15 16, bringing tile 9 down to location 13, and tile 10 left to location 9. Location 10 should be empty now.
2. Remove the desired tile (tile 15) from the last row by putting it into the temporary storage area. Do this by bringing tile 15 from location 14 to location 10. 
3. Prepare to insert the desired tile back to the last row by moving its position relative to the last row. Do this by moving the tiles in location 15 and 16 to location 14 and 15 (in our example, tiles 13 and 14), which should leave an empty spot in location 16. Then, bring tile 12 down to location 16, and move the entire third row to the right, and bring the tile 9 back up to the third row. 
4. Continue preparing by shifting the last row all the way to the left. You do this by moving the tiles in locations 14 and 15 to locations 13 and 14.
5. Reintroduce the tile (tile 15) back into the last row. We do this by dropping tile 15 at location 11 down to location 15. 
6. Fix the third row again. One should now be able to move tile 11 left to location 11 and tile 12 up to location 12. Our third row should be back to normal and the last row should be completed.

---

## Inspiration

My first inspiration was looking back at my first YouTube video which was a tutorial on how to solve a fifteen puzzle. I then wanted to make a project about different ways of solving puzzles and later noticed two things:

1. There are already so many projects that show complex algorithms.
2. Not all puzzles are solvable (that being the 14-15 puzzle).

After learning about the 14-15 puzzle, I then wanted to make a demonstration on being able to determine whether a puzzle was solvable, but then I learned that there are already posts about that.

Thus, I will keep this project short and just make it a way to teach anybody a simple algorithm to solving a fifteen puzzle.

---

## How to Develop

Run ```npm run build```.

If this is your first time using npm, you may need to run ```sudo apt install npm```, ```npm install typescript```, ```sudo npm install -g webpack```, and ```npm install`.
