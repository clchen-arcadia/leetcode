/**
    pseudocode:
        getSkyline from each of the four directions
        loop over every cell in the grid and check if you're allowed to incr the height
            doing this can be slow when recalculating four skylines for each check,
            but speeds up when using this insight: for each of the four directions, 
            the max you can incr, is up to the max at that "alleyway"
        if so, calculate how much height can you incr, tally up and return
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const skylineNorth = getSkyline(grid, 'north');
    const skylineEast = getSkyline(grid, 'east');
    const skylineSouth = getSkyline(grid, 'south');
    const skylineWest = getSkyline(grid, 'west');

    let totalSumVolume = 0;

    const n = grid.length;
    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            totalSumVolume += _getIncreaseHeightAllowed([i, j]);
        }
    }

    return totalSumVolume;

    function _getIncreaseHeightAllowed(cell) {
        const n = grid.length;
        const maxAllowed = Math.min(
                skylineNorth[n - 1 - cell[1]],
                skylineEast[n - 1 - cell[0]],
                skylineSouth[cell[1]],
                skylineWest[cell[0]],
        );
        const differentialHeight = maxAllowed - grid[cell[0]][cell[1]];
        switch (true) {
            case (differentialHeight < 0): {
                console.log("At cell ", cell, ". 0 is outputed");
                return 0;
            }
            case (differentialHeight >= 0): {
                console.log("At cell ", cell, ". ", differentialHeight, " is outputed");
                return differentialHeight;
            } 
        }
    }
};

function getSkyline(grid, direction) {
    const n = grid.length;

    switch (direction.toLowerCase()) {
        case 'north': {
            const skyline = [];
            for (let i=0; i < n; i++) {
                let height = -Infinity;
                for (let j=0; j < n; j++) {
                    const cellHeight = grid[j][n - 1 - i];
                    if (cellHeight > height) {
                        height = cellHeight;
                    }
                }
                skyline.push(height);
            }
            return skyline;
        }
        case 'east': {
            const skyline = [];
            for (let i=0; i < n; i++) {
                let height = -Infinity;
                for (let j=0; j < n; j++) {
                    const cellHeight = grid[n - 1 - i][j];
                    if (cellHeight > height) {
                        height = cellHeight;
                    }
                }
                skyline.push(height);
            }
            return skyline;
        }
        case 'south': {
            const skyline = [];
            for (let i=0; i < n; i++) {
                let height = -Infinity;
                for (let j=0; j < n; j++) {
                    const cellHeight = grid[j][i];
                    if (cellHeight > height) {
                        height = cellHeight;
                    }
                }
                skyline.push(height);
            }
            return skyline;
        }
        case 'west': {
            const skyline = [];
            for (let i=0; i < n; i++) {
                let height = -Infinity;
                for (let j=0; j < n; j++) {
                    const cellHeight = grid[i][j];
                    if (cellHeight > height) {
                        height = cellHeight;
                    }
                }
                skyline.push(height);
            }
            return skyline;
        }
    }
}


