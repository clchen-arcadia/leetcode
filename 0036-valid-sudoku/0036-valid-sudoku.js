/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const validDigits = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    
    // check rows
    for (let row=0; row < 9; row++) {
        //console.log("new row check, row is ", row);
        const seenDigits = new Set();
        for (let col=0; col < 9; col++) {
            const cell = board[row][col];
            //console.log("cell is", cell);
            if (cell === '.') continue;
            if (validDigits.has(cell) && !seenDigits.has(cell)) {
                seenDigits.add(cell);
                //console.log("added to seenDigit set, set is ", seenDigits);
                continue;
            } else {
                return false;
            }
        }
    }
    
    // check columns
    for (let col=0; col < 9; col++) {
        //console.log("new col check, col is ", col);
        const seenDigits = new Set();
        for (let row=0; row < 9; row++) {
            const cell = board[row][col];
            if (cell === '.') continue;
            if (validDigits.has(cell) && !seenDigits.has(cell)) {
                seenDigits.add(cell);
                //console.log("added to seenDigit set, set is ", seenDigits);
                continue;
            } else {
                return false;
            }
        }
    }
    
    const smallBoxCorners = [
        [0, 0],
        [0, 3],
        [0, 6],
        [3, 0],
        [3, 3],
        [3, 6],
        [6, 0],
        [6, 3],
        [6, 6],
    ]
    
    // check small boxes
    for (let corner of smallBoxCorners) {
        //console.log("new corner check, corner is ", corner);
        const seenDigits = new Set();
        for (let coord of [
            corner,
            [corner[0], corner[1] + 1],
            [corner[0], corner[1] + 2],
            [corner[0] + 1, corner[1]],
            [corner[0] + 2, corner[1]],
            [corner[0] + 1, corner[1] + 1],
            [corner[0] + 2, corner[1] + 2],
            [corner[0] + 1, corner[1] + 2],
            [corner[0] + 2, corner[1] + 1],
        ]) {
            const cell = board[coord[0]][coord[1]];
            if (cell === '.') continue;
            if (validDigits.has(cell) && !seenDigits.has(cell)) {
                seenDigits.add(cell);
                //console.log("added to seenDigit set, set is ", seenDigits);
                continue;
            } else {
                return false;
            }
        }
    }
    
    return true;
};