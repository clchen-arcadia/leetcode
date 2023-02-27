# Notes

## Pseudo Code

1. getSkyline for each of the cardinal directions e.g. (grid, 'north') => \[7, 8, 4, 9\]
2. Then iterate over every cell in the grid and calculate how much height you may increase.
    - At each cell, get the relevant heights from each of the four skylines from each cardinal direction.
    - The smallest of these values is the tallest your current cell may be.
3. Tally up all these numbers and output.

## What I learned

- This was a great case for using switch-cases.  
    - Add block scoping to the cases to avoid SyntaxErrors when declaring a variable of the same name in multiple cases.  
    - There's another trick with switch-cases: switch on expression (true) and you can uses cases on expressions that evalute to booleans to replicate multiple if-else blocks.

- It was tough to visualize rows and columns versus indices on a grid, so a test run with console.log(skylineNorth, East, ...) was a must.

- Right at the end for computing differentialHeight I mixed up Math.max versus Math.min and needed to remember what I was doing. 

Unfortunately, due to the nested loops used, this code runs in O(N^2) time, but should run in O(N) space.
