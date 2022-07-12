# Source Code Structure

This document explains the code structure of this project.

---

## All Files

All the source code is written in TypeScript then converted into Javascript by running ```npm run build``` in the terminal.

The files are the following: 

Direction, Grid, Location, Puzzle, ValidMoves.

---

## Direction

Direction has the Direction enum.

---

## Grid

Grid imports Location. It creates the Grid object and keeps track of a 4x4 grid of tile numbers.

---

## Location

Location imports Direction. It has the Location class definition and has the get row, get column, get index, and get location in direction functions.

---

## Puzzle

Puzzle imports Grid, Location, and ValidMoves. It has the Puzzle class definition and deals with puzzle logic and state.

--- 

## ValidMoves

ValidMoves imports Card, Rank, and Suit. It has the ValidMoves class definition which is used to determine whether it is valid to move the empty slot at a specific location in a given direction.
